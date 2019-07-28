<template>
  <div class="home">
    <div class="grid-container">
      <WeatherContent></WeatherContent>
      <div class="app-contont">
          <Bookmarks></Bookmarks>
          <NewsContent></NewsContent>
      </div>
    </div>
  </div>
</template>

<script>
import Bookmarks from "@/components/bookmarks/Bookmarks.vue";
import WeatherContent from "@/components/WeatherContent.vue";
import NewsContent from "@/components/NewsContent.vue";

export default {
  name: "home",
  components: {
    Bookmarks,
    WeatherContent,
    NewsContent
  }
};
</script>

<style lang="scss">
.grid-container {
  width: 100%;
  padding: 0;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.app-contont{
  width: 100%;
  @include tablet{
    width: calc(100% - 300px - 40px);
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
}
</style>
