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
.weather-rain-container__outer {
  width: 100%;
  padding: 0 40px;
  max-width: 400px;
  padding: 0 20px;
  margin: 0 auto;
  @include tablet{
    width: calc(60% - 20px);
    padding-right: 80px;
    max-width: 800px;
  }
}
.rain-grid {
  position: relative;
  width: 100%;
  height: 100px;
  border: 2px solid #fff;
  border-top: 1px solid #fff;
  display: flex;
  flex-wrap: nowrap;
  box-shadow: rgb(95, 102, 108) 1px 1px 0px;
  .rain-grid-item {
    display: block;
    position: relative;
    width: calc(100% / 8);
    border-right: 1px solid #fff;
    &:nth-of-type(even) {
      border-right: 2px solid #fff;
    }
    &:last-of-type {
      border-right: none;
    }
  }
  .rain-grid-item__markers {
    width: 100%;
    height: calc(100% / 3);
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    position: absolute;
    top: calc(100% / 3);
    left: 0;
  }
  .rain-grid__water-indicator {
    box-sizing: border-box;
    color: #fff;
    display: block;
    font-weight: 700;
    position: absolute;
    text-shadow: rgb(95, 102, 108) 1px 1px 0px;
    &.heavy {
      right: 5px;
      top: 5px;
    }
    &.light {
      right: 5px;
      bottom: 5px;
    }
  }
}

.rain-grid-results__outer{
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
.rain-grid-results{
  position: relative;
  display: flex;
  align-items: flex-end;
  flex-wrap: nowrap;
  height: 100%;
  .rain-grid-results__item{
     width:calc((100% / 12)  - ( (11 * 10px) / 12)  );
      margin-right: calc((11 * 10px) / 11);
      &:first-of-type{
        margin-left: calc(((11 * 10px) / 11)/2);
      }
      &:last-of-type{
        margin-right: calc(((11 * 10px) / 11)/2);
      }
      &:nth-of-type(even){
      display: none;
    }
    @include tablet{
      width:calc((100% / 24)  - ( (23 * 10px) / 24)  );
      margin-right: calc((23 * 10px) / 23);
      &:first-of-type{
        margin-left: calc(((23 * 10px) / 11)/2);
      }
      &:last-of-type{
        margin-right: calc(((23 * 10px) / 11)/2);
      }
      &:nth-of-type(even){
      display: block;
    }
    }

    background: lightblue;
    height: 10px;
    
  }
  
}


.rain-grid-times {
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  margin-top: 10px;
  .rain-grid-times__time {
    display: block;
    position: relative;
    width: calc(100% / 8);
    color: #fff;
    text-align: left;
    z-index: 2;
    &:nth-of-type(even){
      opacity: 0; 
    }
    p { 
      position: absolute;
      left: -20px;
    }
    &:first-of-type{
      left: 10px;
    }
    &:last-of-type {
      width: auto;
    }
      
    @include tablet{
      &:last-of-type {
        p {
          left: -40px;
        }
      }
      &:nth-of-type(even){
        opacity: 1; 
      }
    }
  }
}
</style>