<template>
  <div class="weather-current-container__outer">
    <div class="weather__current-temp__container">
      <!-- Icons made by Freepik from www.flaticon.com -->
      <div class="weather__current-temp__image-container">
        <img
          v-if="imageName == 'broken_clouds'"
          class="weather__current-temp__image"
          alt="broken_clouds"
          src="@/assets/weather-images/broken_clouds.svg"
        >
        <img
          v-else-if="imageName == 'clear_sky'"
          class="weather__current-temp__image"
          alt="clear_sky"
          src="@/assets/weather-images/clear_sky.svg"
        >
        <img
          v-else-if="imageName == 'few_clouds'"
          class="weather__current-temp__image"
          alt="few_clouds"
          src="@/assets/weather-images/few_clouds.svg"
        >
        <img
          v-else-if="imageName == 'mist'"
          class="weather__current-temp__image"
          alt="mist"
          src="@/assets/weather-images/mist.svg"
        >
        <img
          v-else-if="imageName == 'rain'"
          class="weather__current-temp__image"
          alt="rain"
          src="@/assets/weather-images/rain.svg"
        >
        <img
          v-else-if="imageName == 'scattered_clouds'"
          class="weather__current-temp__image"
          alt="scattered_clouds"
          src="@/assets/weather-images/scattered_clouds.svg"
        >
        <img
          v-else-if="imageName == 'shower_rain'"
          class="weather__current-temp__image"
          alt="shower_rain"
          src="@/assets/weather-images/shower_rain.svg"
        >
        <img
          v-else-if="imageName == 'snow'"
          class="weather__current-temp__image"
          alt="snow"
          src="@/assets/weather-images/snow.svg"
        >
        <img
          v-else-if="imageName == 'thunderstorm'"
          class="weather__current-temp__image"
          alt="thunderstorm"
          src="@/assets/weather-images/thunderstorm.svg"
        >
      </div>
      <p
        class="weather__current-temp__temp"
      >{{makeRoundNumber(currentWeatherData.main.temp)}} &deg; C</p>
    </div>

    <div class="weather__current-data__container">
      <p class="weather__current-data__item">
        <span>Minimum:</span>
        {{makeRoundNumber(currentWeatherData.main.temp_min)}} &deg; C
      </p>
      <p class="weather__current-data__item">
        <span>Maximum:</span>
        {{makeRoundNumber(currentWeatherData.main.temp_max)}} &deg; C
      </p>
      <p class="weather__current-data__item">
        <span>Vochtigheid:</span>
        {{makeRoundNumber(currentWeatherData.main.humidity)}}%
      </p>
      <p class="weather__current-data__item">
        <span>Druk:</span>
        {{makeRoundNumber(currentWeatherData.main.pressure)}} hPa
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeatherCurrent",
  data() {
    return {
      currentWeatherData: [],
      location_id: 2759794,
      appid: process.env.VUE_APP_WEATHER_API_KEY,
      imageName: ""
    };
  },
  computed: {},
  methods: {
    makeRoundNumber(data) {
      return Math.round(data);
    },
    getMatchinImage(data) {
      let dataContainer = data.split(" ").join("_");
      this.imageName = dataContainer;
    },
    getCurrentWeather() {
      let self = this;
      let api = `http://api.openweathermap.org/data/2.5/weather?id=${
        this.location_id
      }&units=metric&appid=${this.appid}`;

      this.axios
        .get(api)
        .then(response => {
          this.currentWeatherData = response.data;
          this.getMatchinImage(response.data.weather[0].description);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    this.getCurrentWeather();
  }
};
</script>

<style lang="scss" scoped>
.weather-current-container__outer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 0 20px;
  z-index: 1;
  @include tablet {
    width: calc(40% - 20px);
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-left: 80px;
  }
}
.weather__current-temp__container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  text-align: center;
  margin-right: 20px;
}
.weather__current-temp__image-container {
  position: relative;
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
}
.weather__current-temp__image {
  width: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  height: auto;
  width: 100%;
  transform: translate(-50%, -50%);
}
.weather__current-temp__temp {
  width: 200px;
  font-size: 36px;
  font-weight: bold;
  color: #fff;
}

.weather__current-data__container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  margin-top: 10px;
  margin-bottom: 40px;
  @include tablet {
    margin-bottom: 0;
  }
}
.weather__current-data__item {
  color: #fff;
  display: inline-flex;
  justify-content: flex-start;
  text-align: left;
  span {
    width: 120px;
    display: block;
    font-weight: bold;
  }
}
</style>