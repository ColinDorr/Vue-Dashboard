<template>
  <div class="news-container__outer">
    <NewsLayout :newsItems="newsData"></NewsLayout>
  </div>
</template>

<script>
import NewsLayout from "@/components/NewsLayout.vue";

export default {
  name: "NewsHacker",
  data() {
    return {
      newsData: []
    };
  },
  components: {
    NewsLayout
  },
  methods: {
    getNewsDataList() {
      // https://hackernews.api-docs.io/v0/live-data/new-and-top-stories
      let api = `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`;
      this.axios
        .get(api)
        .then(response => {
          this.newsData = response.data;
          this.getNewsDataItem(30);
        })
        .catch(error => {
          console.log(error);
        });
    },
    getNewsDataItem(itemMax) {
      let dataContainer = [];
      let self = this;
      this.newsData.forEach(function(element, index) {
        if (index < itemMax) {
          let api =
            "https://hacker-news.firebaseio.com/v0/item/" +
            element +
            ".json?print=pretty";
          self.axios
            .get(api)
            .then(response => {
              dataContainer.push({
                title: response.data.title || "",
                description: "",
                image: "",
                date: self.getTime(response.data.time) || "",
                source: "HackerNews",
                author: response.data.by || "",
                url: response.data.url
              });
            })
            .catch(error => {
              console.log(error);
            });
        }
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
    this.getNewsDataList();
  }
};
</script>

<style lang="scss" scoped>
</style>