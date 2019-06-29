<template>
  <div class="weather-rain-container__outer">
    <div class="weather-forcast__item">

      <div class="rain-grid">
        <div v-for="n in filterdRainWeatherData" class="rain-grid-item">
          <div class="rain-grid-item__markers"></div>
        </div>

      <div class="rain-grid-results__outer">
        <div class="rain-grid-results">
          <div v-for="(item,index) in rainWeatherData" 
            class="rain-grid-results__item" 
            :style="'height:' + calculateDownfallStyle(item.rain) + '%'">
          </div>
        </div>
        </div>
          <p class="rain-grid__water-indicator heavy">Zwaar</p>
          <p class="rain-grid__water-indicator light">Licht</p>
        </div>
      </div>

      <div class="rain-grid-times">
        <div class="rain-grid-times__time">
          <p>Nu</p>
        </div>
        <div class="rain-grid-times__time" v-for="(item, index) in filterdRainWeatherData">
          <p>{{item.time}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeatherRain",
  data() {
    return {
      rainWeatherData: [],
      filterdRainWeatherData: [],
      appid: process.env.VUE_APP_WEATHER_API_KEY,
      lat: 52.37,
      lon: 4.89
    };
  },

  methods: {
    calculateDownfallStyle(value){
      let dataContainer = 0;
      let max = 20;
      dataContainer = ((value / max) * 100);
      return dataContainer
    },
    calculateDownfall(value) {
      let calculatedValue = Math.pow(10, (value - 109) / 32);
      calculatedValue = parseFloat(calculatedValue.toFixed(2));
      return calculatedValue;
    },
    removeRaindata(data) {
      let dataContainer = [];

      dataContainer = data.filter(function(value, index, Arr) {
        return index % 3 == 0;
      });

      this.filterdRainWeatherData = dataContainer;
    },
    getRainForNext3Hours() {
      // https://www.buienradar.nl/overbuienradar/gratis-weerdata
      let api = `https://gpsgadget.buienradar.nl/data/raintext/?lat=${
        this.lat
      }&lon=${this.lon}`;
      this.axios
        .get(api)
        .then(response => {
          let dataContainer = [];
          this.rainWeatherData = response.data;
          this.rainWeatherData = this.rainWeatherData.match(/.{1,9}/g);

          this.rainWeatherData.forEach(function(element) {
            dataContainer.push({
              rain: Number(element.split("|")[0]),
              time: element.split("|")[1]
            });
          });
          this.rainWeatherData = dataContainer;
          this.removeRaindata(dataContainer);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    this.getRainForNext3Hours();
  }
};
</script>

<style lang="scss" scoped>
</style>