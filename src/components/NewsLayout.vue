<template>
  <div class="news-container__outer">
    <ul class="news-articles__list" v-if="newsItems">
      <li v-for="(item,index) in newsItems" class="news-articles__list-item-container">
        <a :href="item.url" target="_blank" class="news-articles__list-item">
          <div class="news-article__image-container">
            <img class="news-article__image" v-if="item.image" :src="item.image">
            <img class="news-article__image" v-else src="@/assets/no-image.png">
          </div>
          <div class="news-article__data-container">
            <p class="news-article__item-meta">{{item.date}} - {{item.source}}</p>
            <h4 class="news-article__item-title" v-if="item.title">{{item.title}}</h4>
            <p class="news-article__item-description" v-if="item.description">{{item.description}}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NewsLayout",
  props: {
    newsItems: {
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {}
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