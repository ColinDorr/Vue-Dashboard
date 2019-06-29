<template>
  <div class="news-container__outer">
    <NewsLayout :newsItems="newsData"></NewsLayout>
  </div>
</template>

<script>
import NewsLayout from "@/components/NewsLayout.vue";

export default {
  name: "NewsNu",
  data() {
    return {
      newsData: [],
      appid: process.env.VUE_APP_NEWS_API_KEY
    };
  },
  components: {
    NewsLayout
  },
  methods: {
    getNewsData() {
      // https://newsapi.org/s/netherlands-news-api
      let newsOutlet = "www.nu.nl";
      let api = `https://newsapi.org/v2/top-headlines?country=nl&domains=${newsOutlet}&apiKey=${this.appid}`;
      api = `https://newsapi.org/v2/everything?domains=${newsOutlet}&apiKey=${this.appid}`;
      api = `https://newsapi.org/v2/top-headlines?country=nl&category=technology&apiKey=${this.appid}`;

      // https://newsapi.org/v2/top-headlines?country=nl&category=technology&apiKey=API_KEY
      let self = this;

      this.axios
        .get(api)
        .then(response => {
          this.newsData = response.data;
          self.reformData(response.data.articles);
        })
        .catch(error => {
          console.log(error);
        });
    },
    reformData(data) {
      let dataContainer = [];
      let self = this;
      data.forEach(function(element) {
        dataContainer.push({
          title: element.title || "",
          description: element.description || "",
          image: element.urlToImage || "",
          date: self.getTime(element.publishedAt) || "",
          source: self.getSource(element.source) || "",
          author: element.author || "",
          url: element.url || ""
        });
      });
      this.newsData = dataContainer;
    },
    getTime(data) {
      let TimeContainer = data.split("T")[1];
      TimeContainer = TimeContainer.substr(0, 5);
      let DateContainer = data.split("T")[0];
      DateContainer =
        DateContainer.split("-")[2] +
        "-" +
        DateContainer.split("-")[1] +
        "-" +
        DateContainer.split("-")[0];

      return TimeContainer + " - " + DateContainer;
    },
    getSource(value) {
      let data = value;
      if (value.name) {
        data = value.name.toLowerCase();
        data = data.replace("www.", "");
        data = data.charAt(0).toUpperCase() + data.slice(1);
      }

      return data;
    }
  },
  mounted() {
    this.getNewsData();
  }
};
</script>

<style lang="scss" scoped></style>
