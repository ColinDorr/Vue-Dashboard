<template>
  <div class="news-container__outer">
    <NewsLayout :newsItems="newsData"></NewsLayout>
  </div>
</template>

<script>
import NewsLayout from "@/components/NewsLayout.vue";

export default {
  name: "NewsFloridaMan",
  data() {
    return {
      newsData: []
    };
  },
  components: {
    NewsLayout
  },
  computed: {},
  methods: {
    getNewsData() {
      let api = `https://www.reddit.com/r/FloridaMan/top/.json?count=30`;
      this.axios
        .get(api)
        .then(response => {
          this.newsData = response.data.data.children;
          this.reformData(this.newsData);
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
          title: element.data.title || "",
          description: element.data.selftext || "",
          image: element.data.thumbnail || "",
          date: self.getTime(element.data.created_utc) || "",
          source:
            element.data.subreddit_name_prefixed ||
            element.data.subreddit ||
            "",
          author: element.data.author || "",
          url: element.data.url || ""
        });
      });
      this.newsData = dataContainer;
    },
    getTime(data) {
      let time = new Date(data * 1000).toLocaleTimeString("nl-NL");
      time = time.substr(0, time.length - 3);
      let date = new Date(data * 1000).toLocaleDateString("nl-NL");
      return time + " - " + date;
    }
  },
  mounted() {
    this.getNewsData();
  }
};
</script>

<style lang="scss" scoped></style>
