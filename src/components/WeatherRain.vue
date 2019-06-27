<template>
  <div class="weather-container__outer">
    <h2>Weather - Rain (next 3 hours)</h2>
    <h3>{{rainWeatherData.name}}</h3>

    <div class="weather-forcast__item">
      <!-- <div class="weather-forcast__item-data">
        <ul>
          <li v-for="(item, index) in rainWeatherData">
            <p>{{item.time}} - {{calculateDownfall(item.rain)}} mm/u.</p>
          </li>
        </ul>
      </div>-->

      <div class="rain-grid">
        <div v-for="n in filterdRainWeatherData" class="rain-grid-item">
          <div class="rain-grid-item__markers"></div>
        </div>
        <p class="rain-grid__water-indicator heavy">Zwaar</p>
        <p class="rain-grid__water-indicator light">Licht</p>
      </div>

      <div class="rain-grid-results">
        <div v-for="(item,index) in rainWeatherData" class="rain-grid-results__item">
        </div>
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
.weather-container__outer {
  width: 100%;
  padding: 40px;
  max-width: 1000px;
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
      border: none;
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
    font-weight: 400;
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

.rain-grid-results{
  position: relative;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-end;
  flex-wrap: nowrap;
  .rain-grid-results__item{
    width:calc((100% / 24)  - ( (23 * 10px) / 24)  );
    margin-right: calc((23 * 10px) / 23);
    background: lightblue;
    height: 10px;
    &:last-of-type{
    // .rain-grid-results__item{
      margin-right: 0;
    // }
  }
  }
  
}


.rain-grid-times {
  position: relative;
  width: 100%;
  height: 100px;
  display: flex;
  flex-wrap: nowrap;
  margin-top: 10px;
  .rain-grid-times__time {
    display: block;
    position: relative;
    width: calc(100% / 8);
    color: #fff;
    text-align: left;
    p {
      position: absolute;
      left: -20px;
    }
    &:first-of-type {
      margin: 0;
      p {
        left: 0;
      }
    }
    &:last-of-type {
      width: auto;
      p {
        left: -40px;
      }
    }
  }
}
</style>