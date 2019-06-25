<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <!-- <WeatherCurrent /> -->

    <!-- <WeatherRain /> -->

    <!-- <NewsNu /> -->
    <NewsHacker />
    <!-- <NewsFloridaMan /> -->


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