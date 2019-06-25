<template>
  <div class="news-container__outer">
    <h1>Nieuws - Nu.nl</h1>
    <ul class="news-articles__list">
      <li v-for="(item,index) in nuData.articles" class="news-articles__list-item-container">
        <a v-if="nuData.articles[index-1] && nuData.articles[index-1].content !== item.content" :href="item.url"
          target="_blank" class="news-articles__list-item">
          <div class="news-article__image-container">
            <img class="news-article__image" v-if="item.urlToImage" :src="item.urlToImage">      
            <img class="news-article__image" v-else src="@/assets/no-image.png">
          </div>
          <div class="news-article__data-container">
            <p class="news-article__item-meta">Publicatie: {{getTime(item.publishedAt)}} - {{getSource(item.source.name)}}</p>
            <h4 class="news-article__item-title" v-if="item.title">{{item.title}}</h4>
            <!-- <p v-if="item.content">Content: {{item.content}}</p> -->
             <p class="news-article__item-description" v-if="item.description">Omschrijving: {{item.description}}</p>
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
      },
      getTime(value){
        let TimeContainer = value.split('T')[1];
        TimeContainer = TimeContainer.substr(0,5);

        return TimeContainer;
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
    overflow: auto;
  }

  .news-articles__list-item-container{
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
      .news-article__item-title{
        text-decoration: underline;
      }
    }
  }

  .news-article__image-container{
    display: block;
    position: relative;
    width: 200px;
    height: 100px;
  }
.news-article__image{
  width: 100%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}

.news-article__data-container{
  margin-left: 20px;
  width: calc(100% - 30% - 20px);
}
.news-article__item-meta{
  text-align: left;
  font-family: 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: rgb(116, 161, 205);
}
.news-article__item-title{
  margin: 10px 0 5px 0;
  text-align: left;
  font-family: 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: rgb(1, 0, 80);
}
.news-article__item-description{
  text-align: left;
  font-family: 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: rgb(1, 0, 80);
}

</style>