<template>
  <div class="weather-content-container__outer content-component">
    <h1 class="weather-content__title-location">Amsterdam</h1>

    <WeatherCurrent></WeatherCurrent>

    <WeatherForecast></WeatherForecast>

    <WeatherDetails></WeatherDetails>

    <WeatherRain></WeatherRain>
  </div>
</template>

<script>
import WeatherCurrent from "@/components/ApiData/WeatherCurrent.vue";
import WeatherForecast from "@/components/ApiData/WeatherForecast.vue";
import WeatherDetails from "@/components/ApiData/WeatherDetails.vue";
import WeatherRain from "@/components/ApiData/WeatherRain.vue";

export default {
  name: "WeatherContent",
  components: {
    WeatherCurrent,
    WeatherForecast,
    WeatherDetails,
    WeatherRain
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.weather-content-container__outer {
  width: 100%;
  background: $background-blue-pink;
  @include tablet {
    width: 300px;
  }
  > div{
    margin-bottom: 40px;
  }
}
.weather-content__title-location {
  color: #fff;
  width: 100%;
  text-align: center;
  font-size: 32px;
}
</style>
