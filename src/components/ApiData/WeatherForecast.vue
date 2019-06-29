<template>
  <div class="weather-forecast-container__outer">

    <ul>
      <li v-for="(item,index) in forecastWeatherData">
        <div class="weather-forecat__item-day">
          <p>{{getTime(item.dt)}}</p>
           <p>{{item.main.humidity}}</p>
           <WeatherIcons class="weather-forecast__item-image":imageName="forecastWeatherImages[index]"></WeatherIcons>
          <p>{{makeRoundNumber(item.main.temp_max)}}</p>
          <p>{{makeRoundNumber(item.main.temp_min)}}</p>


        </div>
        <!-- <pre>{{item}}</pre> -->
      </li>
    </ul>
  </div>
</template>

<script>
import WeatherIcons from "@/components/ApiData/WeatherIcons.vue";

export default {
  name: "WeatherForecast",
  data() {
    return {
      forecastWeatherData: [],
      forecastWeatherImages: [],
      location_id: 2759794,
      appid: process.env.VUE_APP_WEATHER_API_KEY,
      imageName: ""
    };
  },
  components:{
    WeatherIcons
  },
  computed: {},
  methods: {
     getTime(data) {
      let day = new Date(data * 1000).toLocaleDateString("nl-NL", {'weekday': 'long'});
      day = day.split(',')[0]
      day = day[0].toUpperCase() + day[1];
      console.log(day);
      return day
    },
     makeRoundNumber(data) {
      return Math.round(data);
    },
    getMatchinImage(data) {
      let dataContainer = data.split(" ").join("_");
      return dataContainer;
    },
    getForecastWeather() {
      let self = this;
      let api = `http://api.openweathermap.org/data/2.5/forecast?id=${
        this.location_id
      }&units=metric&appid=${this.appid}`;

      this.axios
        .get(api)
        .then(response => {
          this.filterForecastWeather(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    filterForecastWeather(data){
      let day = "";
      let dataContainer = [];
      let iconContainer = [];
      let self = this;
      data.list.forEach(function(element) {
        if(element.dt_txt.split(" ")[0] !== day){
          day = element.dt_txt.split(" ")[0];
          dataContainer.push(element);
          iconContainer.push(self.getMatchinImage(element.weather[0].description));
        }
      });
      this.forecastWeatherData = dataContainer;
      this.forecastWeatherImages = iconContainer;
    }
  },
  mounted() {
    this.getForecastWeather();
  }
};
</script>

<style lang="scss" scoped>

.weather-forecast__item-image{
  width: 30px;
}

</style>