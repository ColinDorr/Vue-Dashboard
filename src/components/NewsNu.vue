<template>
  <div class="news-container__outer">
    <h1>News - Nu.nl</h1>
    <ul class="news-articles__list">
      <li v-for="(item,index) in nuData.articles" class="news-articles__list-item-container">
        <a v-if="nuData.articles[index-1] && nuData.articles[index-1].content !== item.content" :href="item.url"
          target="_blank" class="news-articles__list-item">
          <img class="news-articles__list-item__featured-image" v-if="item.urlToImage" :src="item.urlToImage">
          <img class="news-articles__list-item__featured-image" v-else
            src="http://denrakaev.com/wp-content/uploads/2015/03/no-image.png">
          <div class="news-articles__list-item__date">
            <h4 class="item-title" v-if="item.title">
              {{item.title}}
              <span class="item-source">({{getSource(item.source.name)}})</span>
            </h4>
            <!-- <p v-if="item.content">Content: {{item.content}}</p>
            <p v-if="item.description">Omschrijving: {{item.description}}</p>-->
            <p class="item-date" v-if="item.publishedAt">Datum: {{item.publishedAt}}</p>
            <!-- <p v-if="item.author">Schrijver: {{item.author}}</p> -->
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "NewsNu",
    data() {
      return {
        nuData: [],
        appid: process.env.VUE_APP_NEWS_API_KEY,
      };
    },
    methods: {
      getSource(value) {
        let data = value.toLowerCase();
        data = data.replace("www.", "");
        data = data.charAt(0).toUpperCase() + data.slice(1);
        return data;
      }
    },
    mounted() {
      // https://newsapi.org/s/netherlands-news-api
      let newsOutlet = "www.nu.nl";
      let api = `https://newsapi.org/v2/top-headlines?country=nl&domains=${newsOutlet}&apiKey=${this.appid}`;
      api = `https://newsapi.org/v2/everything?domains=${newsOutlet}&apiKey=${this.appid}`;
      this.axios
        .get(api)
        .then(response => {
          console.log(response.data);
          this.nuData = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  };
</script>

<style lang="scss" scoped>
  .news-articles__list {
    display: flex;
    flex-direction: column;
    // max-height: calc((90px + 5px) * 3);
    overflow: auto;
  }

  .news-articles__list-item {
    width: 100%;
    // max-height: 90px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-bottom: 10px;
    overflow: hidden;
    color: #000;
    text-decoration: none;

    &:hover,
    &:focus {
      color: #ccc;
      text-decoration: underline;
    }
  }

  .news-articles__list-item__featured-image {
    max-width: calc(90px * 1);
    height: calc(90px * 0.66);
    overflow: hidden;
  }

  .news-articles__list-item__date {
    width: calc(100% - 90px - 20px);
    margin-left: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .item-title {
    font-family: "Segoe UI", "Tahoma", "Geneva", "Verdana", "Arial"sans-serif;
    font-weight: bold;
    font-size: 18px;
  }

  .item-source {
    color: darkcyan;
  }

  .item-date {
    font-family: "Segoe UI", "Tahoma", "Geneva", "Verdana", "Arial"sans-serif;
    color: darkcyan;
    font-weight: normal;
    font-size: 12px;
  }
</style>