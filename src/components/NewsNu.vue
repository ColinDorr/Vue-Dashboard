<template>
  <div class="news-container__outer">
    <h1>Nieuws - Nu.nl</h1>

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
      let api = `https://newsapi.org/v2/top-headlines?country=nl&domains=${newsOutlet}&apiKey=${
        this.appid
      }`;
      api = `https://newsapi.org/v2/everything?domains=${newsOutlet}&apiKey=${
        this.appid
      }`;
      let self = this;

      this.axios
        .get(api)
        .then(response => {
          console.log(response.data);
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
      console.log(dataContainer);
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

<style lang="scss" scoped>
.news-articles__list {
  display: flex;
  flex-direction: column;
  overflow: auto;
}

.news-articles__list-item-container {
  list-style: none;
  margin: 0;
  padding: 0;
}

.news-articles__list-item {
  position: relative;
  width: 100%;
  height: 100px;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 20px;
  overflow: hidden;
  color: #000;
  text-decoration: none;

  &:hover,
  &:focus {
    .news-article__item-title {
      text-decoration: underline;
    }
  }
}

.news-article__image-container {
  display: block;
  position: relative;
  width: 200px;
  height: 100px;
}
.news-article__image {
  width: 100%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.news-article__data-container {
  margin-left: 20px;
  width: calc(100% - 30% - 20px);
}
.news-article__item-meta {
  text-align: left;
  font-family: "Segoe UI", "Tahoma", "Geneva", "Verdana", sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: rgb(116, 161, 205);
}
.news-article__item-title {
  margin: 10px 0 5px 0;
  text-align: left;
  font-family: "Segoe UI", "Tahoma", "Geneva", "Verdana", sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: rgb(1, 0, 80);
}
.news-article__item-description {
  text-align: left;
  font-family: "Segoe UI", "Tahoma", "Geneva", "Verdana", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: rgb(1, 0, 80);
}
</style>