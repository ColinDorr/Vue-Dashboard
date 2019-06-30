<template>
  <div class="weather-current-container__outer">
    <div class="weather-current__description-container">
      <WeatherIcons
        class="weather-current__description-image"
        :imageName="imageName"
      ></WeatherIcons>
      <h2 class="weather-current__description-title">
        {{ $store.state.currentWeatherData.weather[0].main }}
      </h2>
    </div>

    <div class="weather-current__temp-container">
      <p class="weather-current__temp-now">
        {{ makeRoundNumber($store.state.currentWeatherData.main.temp) }}
      </p>
      <div class="weather-current__temp-extra-container">
        <p class="weather-current__temp-exta-min">
          {{ makeRoundNumber($store.state.currentWeatherData.main.temp_min) }}&deg;
        </p>
        <p class="weather-current__temp-extra-max">
          {{ makeRoundNumber($store.state.currentWeatherData.main.temp_max) }}&deg;
        </p>
      </div>
    </div>
  </div>
</template>

<script>

import WeatherIcons from "@/components/helpers/WeatherIcons.vue";

export default {
  name: "WeatherCurrent",
  components: {
    WeatherIcons
  },
  data() {
    return {
      imageName: ""
    };
  },
  props:{
    currentData : {
      type : Object,
      required: true
    }
  },
  methods:{
    makeRoundNumber(data) {
      return Math.round(data);
    },
    getMatchinImage() {
      this.imageName = this.currentData.weather[0].icon;
    }
  },
  mounted(){
    this.getMatchinImage();
  }
};
</script>

<style lang="scss" scoped>
.weather-current-container__outer {
  display: inline-block;
  margin: 0 auto;
  width: 100%;
  max-width: 300px;
}
.weather-current__description-container {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
}
.weather-current__description-image {
  width: 50px;
  margin-right: 10px;
}
.weather-current__description-title {
  margin: 0;
  font-size: 20px;
  color: #fff;
}
.weather-current__temp-container {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.weather-current__temp-now {
  margin: 0;
  font-size: 160px;
  color: #fff;
  position: relative;
  width: 185px;
  height: 135px;
  overflow: hidden;
  text-align: right;
  padding-right: 25px;
  line-height: 1;
  &:after {
    content: "o";
    position: absolute;
    top: -10px;
    right: -10;
    font-size: 40px;
  }
}
.weather-current__temp-extra-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
}
.weather-current__temp-exta-min,
.weather-current__temp-extra-max {
  margin: 0;
  font-size: 24px;
  color: #fff;
}
.weather-current__temp-exta-min {
  padding-bottom: 5px;
  border-bottom: 2px solid #fff;
}
.weather-current__temp-extra-max {
  margin-top: 5px;
}

.temp_symbol {
  font-size: 100px;
  line-height: 0.5;
}
</style>
