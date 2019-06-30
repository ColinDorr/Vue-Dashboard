<template>
  <div class="weather-forecast-container__outer">
    <ul class="weather-forecast__list">
      <li v-for="(item, index) in $store.state.forecastWeatherData.list" class="weather-forecast__list-item">
        <div class="weather-forecast__item-day">
          <p class="item-day">{{ getTime(item.dt) }}</p>
          <WeatherIcons class="weather-forecast__item-image" :imageName="$store.state.forecastWeatherImages[index]">
          </WeatherIcons>
          <p class="item-max">{{ makeRoundNumber(item.temp.max) }}&#176;</p>
          <p class="item-min">{{ makeRoundNumber(item.temp.min) }}&#176;</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import WeatherIcons from "@/components/helpers/WeatherIcons.vue";

  export default {
    name: "WeatherForecast",
    data() {
      return {
        imageName: ""
      };
    },
    components: {
      WeatherIcons
    },
    methods: {
      getTime(data) {
        let day = new Date(data * 1000).toLocaleDateString("nl-NL", {
          weekday: "long"
        });
        day = day.split(",")[0];
        day = day[0].toUpperCase() + day[1];
        return day;
      },
      makeRoundNumber(data) {
        return Math.round(data);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .weather-forecast-container__outer {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }

  .weather-forecast__list {
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0;
  }

  .weather-forecast__list-item {
    display: block;
    position: relative;
    width: calc(100% / 7);
  }

  .weather-forecast__item-day {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .item-day {
    // font-weight: bold;
    font-size: 16px;
    color: #fff;
  }

  .weather-forecast__item-image {
    width: 30px;
  }

  .item-max,
  .item-min {
    font-size: 16px;
    color: #fff;
  }

  .item-max {
    margin-top: 3px;
    padding-bottom: 3px;
    border-bottom: 1px solid #fff;
  }

  .item-min {
    padding-top: 3px;
    color: #ddd;
  }
</style>