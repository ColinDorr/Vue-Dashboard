<template>
  <div class="home">
    <div class="grid-container">
      <div class="hero-container">
        <div class="hero-container-fade"></div>
        <WeatherCurrent/>

        <!-- <WeatherRain/> -->
      </div>
    </div>

    <NewsNu/>

    <NewsHacker/>

    <NewsFloridaMan/>
  </div>
</template>

<script>
import NewsNu from "@/components/NewsNu.vue";
import NewsHacker from "@/components/NewsHacker.vue";
import NewsFloridaMan from "@/components/NewsFloridaMan.vue";

import WeatherCurrent from "@/components/WeatherCurrent.vue";
import WeatherRain from "@/components/WeatherRain.vue";

export default {
  name: "home",
  components: {
    NewsNu,
    NewsHacker,
    NewsFloridaMan,
    WeatherCurrent,
    WeatherRain
  }
};
</script>

<style lang="scss">
.grid-container {
  width: 100%;
  // max-width: 1200px;
  padding: 0;
  margin: 0 auto;
  box-sizing: border-box;
}

.hero-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-image: url("../assets/hero.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
  padding: 40px 0;
}
.hero-container-fade {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8),
    rgba(255, 255, 255, 0.1) 20%,
    rgba(255, 255, 255, 0)
  );
}
</style>
