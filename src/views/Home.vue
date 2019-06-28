<template>
  <div class="home">
    <Nav></Nav>
    <div class="grid-container">
      <div class="hero-container">
        <div class="hero-container-fade"></div>
        <WeatherCurrent/>
        <WeatherRain/>
      </div>
    </div>

    <NewsNu/>

    <NewsHacker/>

    <NewsFloridaMan/>
  </div>
</template>

<script>
import Nav from "@/components/NavElement.vue";

import NewsNu from "@/components/NewsNu.vue";
import NewsHacker from "@/components/NewsHacker.vue";
import NewsFloridaMan from "@/components/NewsFloridaMan.vue";

import WeatherCurrent from "@/components/WeatherCurrent.vue";
import WeatherRain from "@/components/WeatherRain.vue";

export default {
  name: "home",
  components: {
    Nav,
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
  align-items: flex-end;
  box-sizing: border-box;
  align-items: center;
  position: relative;

  @include tablet {
    flex-wrap: nowrap;
  }
}
.hero-container-fade {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  // background: linear-gradient(
  //   to top,
  //   rgba(0, 0, 0, 0.8),
  //   rgba(255, 255, 255, 0.1) 20%,
  //   rgba(255, 255, 255, 0)
  // );
  opacity: 0.8;
  background: linear-gradient(#e66465, #9198e5);
}
</style>
