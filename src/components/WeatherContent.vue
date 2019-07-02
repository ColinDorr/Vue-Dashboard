<template>
  <div class="weather-content-container__outer content-component">
    <div v-if="loading" class="weather-content-container__inner loading-container">
      <h1>...Loading</h1>
    </div>
    
    <div v-else class="weather-content-container__inner">
      <h1 class="weather-content__title-location">Amsterdam</h1>

      <WeatherCurrent :currentData="this.$store.state.currentWeatherData"></WeatherCurrent>

      <WeatherForecast></WeatherForecast>

      <WeatherDetails></WeatherDetails>

      <WeatherRain></WeatherRain>
    </div>
    
  </div>
</template>

<script>
  import WeatherAPI from "@/services/api/WeatherAPI.js";

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
      return {
        location_id: 2759794,
        lat: 52.37,
        lon: 4.89,
        appid: process.env.VUE_APP_WEATHER_API_KEY,
      };
    },
    watch: {
      loading(){
        this.getForecastImageArray(this.$store.state.forecastWeatherData);
      }
    },
    computed:{
      loading(){
        if ( this.$store.state.currentWeatherData !== null && this.$store.state.rainWeatherData !== null && this.$store.state.forecastWeatherData !== null ) {
          return false;
        }
        return true
      }
    },
    methods: {
      callCurrentWeather() {
        let dataContainer = null;
        WeatherAPI
          .getCurrentWeatherData(this.location_id, this.appid)
          .then(response => {
            dataContainer = response;
          }).catch(error => {
            dataContainer = error;
          })
          .finally(() => {
            this.$store.state.currentWeatherData = dataContainer;
          })
      },
      callRainWeatherData() {
        let dataContainer = null;
        WeatherAPI
          .getRainWeatherData(this.lat, this.lon)
          .then(response => {
            dataContainer = response;
          }).catch(error => {
            dataContainer = error;
          })
          .finally(() => {
            this.$store.state.rainWeatherData = dataContainer;
          })
      },
      callForecastWeatherData() {
        let dataContainer = null;
        WeatherAPI
          .getForecastWeatherData(this.location_id, this.appid)
          .then(response => {
            dataContainer = response;
          }).catch(error => {
            dataContainer = error;
          })
          .finally(() => {
            this.$store.state.forecastWeatherData = dataContainer;
          })
      },
      getMatchinImage(data) {
        let dataContainer = data.split(" ").join("_");
        return dataContainer;
      },
      getForecastImageArray(data) {
        let iconContainer = [];
        let self = this;
        data.list.forEach(function (element) {
          iconContainer.push(self.getMatchinImage(element.weather[0].icon));
        });
        this.$store.state.forecastWeatherImages = iconContainer;
      }
    },
    mounted() {
      this.callCurrentWeather();
      this.callRainWeatherData();
      this.callForecastWeatherData();
    }
  };
</script>

<style lang="scss" scoped>
  .weather-content-container__outer {
    width: 100%;
    background: $background-blue-pink;
    @include tablet {
      width: 300px;
    }
  }
  .weather-content-container__inner{
    >div {
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