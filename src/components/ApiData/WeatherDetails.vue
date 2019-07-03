<template>

  <div class="weather-details-container__outer">
    <div class="weather-details__header">
      <h3 class="weather-details__header__title">Details</h3>
      <span class="weather-details__header__title-decoration"></span>
    </div>

    <ul class="weather-details__list">
      <li class="weather-details__detail-block">
        <WeatherDetailIcons class="weather-details-detail-image-icon" :imageName="'01d'"></WeatherDetailIcons>
        <p class="weather-detail__title">Sunrise</p>
        <p class="weather-detail__result">{{getTime(currentWeatherData.sys.sunrise)}}</p>
      </li>
      <li class="weather-details__detail-block">
        <WeatherDetailIcons class="weather-details-detail-image-icon":imageName="'01d'"></WeatherDetailIcons>
        <p class="weather-detail__title">Humidity</p>
        <p class="weather-detail__result">{{currentWeatherData.main.humidity}}%</p>
      </li>
      <li class="weather-details__detail-block">
        <WeatherDetailIcons class="weather-details-detail-image-icon" :imageName="'01d'"></WeatherDetailIcons>
        <p class="weather-detail__title">Pressure</p>
        <p class="weather-detail__result">{{currentWeatherData.main.pressure}}hPa</p>
      </li>

      <li class="weather-details__detail-block">
        <WeatherDetailIcons class="weather-details-detail-image-icon" :imageName="'01d'"></WeatherDetailIcons>
        <p class="weather-detail__title">Sunset</p>
        <p class="weather-detail__result">{{getTime(currentWeatherData.sys.sunset)}}</p>
      </li>
      <li class="weather-details__detail-block">
        <WeatherDetailIcons class="weather-details-detail-image-icon" :imageName="'01d'"></WeatherDetailIcons>
        <p class="weather-detail__title">Direction</p>
        <p class="weather-detail__result">{{getWindDirection(currentWeatherData.wind.deg)}}</p>
      </li>
      <li class="weather-details__detail-block">
        <WeatherDetailIcons class="weather-details-detail-image-icon" :imageName="'01d'"></WeatherDetailIcons>
        <p class="weather-detail__title">Speed</p>
        <p class="weather-detail__result">{{currentWeatherData.wind.speed}}km/h</p>
      </li>
    </ul>

  </div>
</template>

<script>
  import WeatherDetailIcons from "@/components/helpers/WeatherDetailIcons.vue";

  export default {
    name: "WeatherDetails",
    components: {
      WeatherDetailIcons
    },
    computed: {
      currentWeatherData() {
        return this.$store.state.currentWeatherData;
      },
    },
    methods: {
      makeRoundNumber(data) {
        return Math.round(data);
      },
      getMatchinImage(data) {
        let dataContainer = data.split(" ").join("_");
        this.imageName = dataContainer;
      },
      getTime(data) {
        let time = new Date(data * 1000).toLocaleTimeString("nl-NL");
        time = time.substr(0, time.length - 3);
        return time
      },
      getWindDirection(data) {
        // code from: https://gist.github.com/felipeskroski/8aec22f01dabdbf8fb6b
        if (data > 11.25 && data <= 33.75) {
          return "NNE";
        } else if (data > 33.75 && data <= 56.25) {
          return "ENE";
        } else if (data > 56.25 && data <= 78.75) {
          return "E";
        } else if (data > 78.75 && data <= 101.25) {
          return "ESE";
        } else if (data > 101.25 && data <= 123.75) {
          return "ESE";
        } else if (data > 123.75 && data <= 146.25) {
          return "SE";
        } else if (data > 146.25 && data <= 168.75) {
          return "SSE";
        } else if (data > 168.75 && data <= 191.25) {
          return "S";
        } else if (data > 191.25 && data <= 213.75) {
          return "SSW";
        } else if (data > 213.75 && data <= 236.25) {
          return "SW";
        } else if (data > 236.25 && data <= 258.75) {
          return "WSW";
        } else if (data > 258.75 && data <= 281.25) {
          return "W";
        } else if (data > 281.25 && data <= 303.75) {
          return "WNW";
        } else if (data > 303.75 && data <= 326.25) {
          return "NW";
        } else if (data > 326.25 && data <= 348.75) {
          return "NNW";
        } else {
          return "N";
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .weather-details-container__outer {
    display: inline-block;
    margin: 0 auto;
    width: 100%;
    max-width: 300px;
  }

  .weather-details__header {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    position: relative;
    align-items: center;
    margin-bottom: 10px;
  }

  .weather-details__header__title {
    font-size: 12px;
    color: #fff;
    margin: 0;
    padding-right: 15px;
    font-weight: normal;
    text-transform: uppercase
  }

  .weather-details__header__title-decoration {
    height: 1px;
    display: block;
    background: #fff;
    width: 100%;
  }
  .weather-details__list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin: 0;
    padding: 0;
  }

  .weather-details__detail-block {
    list-style: none;
    width: calc(((100% - 20px) / 3));
    background: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    padding: 5px;
    box-sizing: border-box;
    margin: 0;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:nth-of-type(3n + 2) {
      margin-left: 10px;
      margin-right: 10px;
    }
  }

  .weather-details-detail-image-icon{
    width: 40px;
  }
  .weather-detail__title{
    color: #ddd;
    font-size: 12px
  }
  .weather-detail__result{
    font-size: 14px;
    color: #fff;
    font-weight: 500;
  }
</style>