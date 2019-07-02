<template>
  <div class="weather-content-container__outer content-component">
    <h1>{{ newsSources[activeNews] }}</h1>
    <button @click="updateNewsSource('-')">
      < </button> <button @click="updateNewsSource('+')">>
    </button>

    <div v-if="activeNews == 0 && $store.state.nuNewsData" class="news-container__outer NuNews">
      <NewsLayout :newsItems="$store.state.nuNewsData"></NewsLayout>
    </div>

    <div v-if="activeNews == 1 && $store.state.hackerNewsData" class="news-container__outer HackerNews">
      <NewsLayout :newsItems="$store.state.hackerNewsData"></NewsLayout>
    </div>

    <div v-if="activeNews == 2 && $store.state.floridaManNewsData" class="news-container__outer FloridaManNews">
      <NewsLayout :newsItems="$store.state.floridaManNewsData"></NewsLayout>
    </div>

  </div>
</template>

<script>
  import NewsAPI from "@/services/api/NewsAPI.js";
  import NewsLayout from "@/components/NewsLayout.vue";

  export default {
    name: "NewsContent",
    components: {
      NewsLayout
    },
    data() {
      return {
        activeNews: 0,
        itemMax: 30,
        appid: process.env.VUE_APP_NEWS_API_KEY,
        newsOutlet: "www.nu.nl",
        newsSources: ["Nu.nl News", "Hacker News", "Florida Man News"]
      };
    },
    watch: {
      loading() {
        console.log('done loading news')
      }
    },
    computed: {
      loading() {
        if (
          this.$store.state.hackerNewsData !== null &&
          this.$store.state.nuNewsData !== null &&
          this.$store.state.floridaManNewsData !== null) {
          return false;
        }
        return true
      }
    },
    methods: {
      updateNewsSource(data) {
        let datacontainer = this.activeNews;
        if (data === "-") {
          datacontainer = datacontainer - 1;
        } else if (data === "+") {
          datacontainer = datacontainer + 1;
        } else {
          datacontainer = data;
        }
        this.checkNewsSource(datacontainer);
      },
      checkNewsSource(data) {
        let max = this.newsSources.length - 1;
        if (data < 0) {
          this.activeNews = this.newsSources.lenght - 1;
        } else if (data > max) {
          this.activeNews = 0;
        } else {
          this.activeNews = data;
        }
      },

      callNuNewsData() {
        let dataContainer = [];
        NewsAPI
          .getNuNewsData(this.newsOutlet, this.appid)
          .then(response => {
            dataContainer = response;
          }).catch(error => {
            dataContainer = error;
          })
          .finally(() => {
            this.$store.state.nuNewsData = dataContainer;
          })
      },
      callHackerNewsList() {
        let dataContainer = [];
        NewsAPI
          .getHackerNewsIDList()
          .then(response => {
            dataContainer = response;
          }).catch(error => {
            dataContainer = error;
          })
          .finally(() => {
            this.$store.state.hackerNewsIDs = dataContainer;
            this.callHackerNewsData(this.$store.state.hackerNewsIDs, this.itemMax)
          })
      },
      callHackerNewsData(data, itemMax) {
        let dataContainer = [];
        let self = this;
        data.forEach(function (element, index) {
          if (index < itemMax) {
            NewsAPI
              .getHackerNewsData(element)
              .then(response => {
                dataContainer.push(response);
              }).catch(error => {
                dataContainer = error
              })
              .finally(() => {})
          }
          if (index == itemMax) {
            self.$store.state.hackerNewsData = dataContainer;
          }
        });
      },
      callFloridaManNewsData() {
        let dataContainer = [];
        NewsAPI
          .getFloridaManNewsData()
          .then(response => {
            dataContainer = response;
          }).catch(error => {
            dataContainer = error;
          })
          .finally(() => {
            this.$store.state.floridaManNewsData = dataContainer;
          })
      },
    },
    mounted() {
      this.callNuNewsData();
      this.callHackerNewsList();
      this.callFloridaManNewsData();
    }
  };
</script>

<style lang="scss" scoped>
  .weather-content-container__outer {
    width: 100%;

    @include tablet {
      box-sizing: border-box;
      width: calc(100% - 300px - 80px);
      height: 100vh;
      overflow: auto;
    }
  }
</style>