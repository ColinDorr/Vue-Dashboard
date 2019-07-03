
<template>
  <div class="weather-rain-container__outer">

    <div class="weather-rain__header">
      <h3 class="weather-rain__header__title">Rain</h3>
      <span class="weather-rain__header__title-decoration"></span>
    </div>


    <ul class="weather-chart__list">

      <div 
        v-if="featuredWeatherDataID != -1" 
        class="weather-item__tooltip"
        :style="`top:${getTooltipVertical(featuredWeatherDataID)}; left:${getTooltipHorizontal(featuredWeatherData.rain)};`"
      >
          <p>{{featuredWeatherData.time}}</p>
          <p>{{featuredWeatherData.rain}} mm/h</p>
      </div>
      
      <li 
        v-for="(item,index) in filterdRainWeatherData" 
        @click="showWeatherItemDetails(index)"
        class="weather-item"
        :style="`height: calc(${calculateDownfall(item.rain)}% + 15px);`">
        <div class="weather-item__circle"></div>
        <div class="weather-item__stick"></div>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "WeatherRain",
  data() {
    return {
      filterdRainWeatherData: [],
      featuredWeatherData : null,
      featuredWeatherDataID: -1,
    };
  },

  methods: {
    getTooltipVertical(value ){
      let calculatedValue = this.calculateDownfall(value);
      let distance = (100 - calculatedValue)
      distance = 'calc(' + distance + '% - 15px'  + ');'
      return distance;
    },
    getTooltipHorizontal(id){
      let distance = (300 / this.filterdRainWeatherData.length);
      distance = (distance * ( this.featuredWeatherDataID) - 2);
      return distance + 'px';
    },
    calculateDownfallStyle(value){
      let dataContainer = 0;
      let max = 20;
      dataContainer = ((9 / max) * 100);
      return dataContainer
    },
    calculateDownfall(value) {
      let calculatedValue = Math.pow(10, (value - 109) / 32);
      calculatedValue = parseFloat(calculatedValue.toFixed(2));
      return this.calculateDownfallStyle(calculatedValue)
    },
    removeRaindata(data) {
      let dataContainer = [];
      dataContainer = data.filter(function(value, index, Arr) {
        return index % 3 == 0;
      });
      this.filterdRainWeatherData = dataContainer;
    },
    showWeatherItemDetails(index){
      console.log(index == this.featuredWeatherDataID)
      if(index == this.featuredWeatherDataID){
        this.featuredWeatherDataID = -1;
        this.featuredWeatherData = {};
      }
      else{
        this.featuredWeatherDataID = index;
        this.featuredWeatherData = this.filterdRainWeatherData[index]
      }
    }
  },
  mounted() {
    this.removeRaindata(this.$store.state.rainWeatherData);
  }
};
</script>

<style lang="scss" scoped>

  .weather-rain__header {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    position: relative;
    align-items: center;
    margin-bottom: 10px;
  }

  .weather-rain__header__title {
    font-size: 12px;
    color: #fff;
    margin: 0;
    padding-right: 15px;
    font-weight: normal;
    text-transform: uppercase
  }

  .weather-rain__header__title-decoration {
    height: 1px;
    display: block;
    background: #fff;
    width: 100%;
  }

.weather-chart__list{
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0;
  margin: 0;
  margin-top: 30px;
  height: 100px;
}
.weather-item{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100px;
  cursor: pointer;
  transition: all 0.5S;
  width: calc(100% / 8);
  top: 0;
  left: 0;
  transition: all 0.5s;
  &:hover,
  &:focus{
    .weather-item__circle{
      background: rgba(255,255,255,0.6)
    }
  }
}
.weather-item__circle{
  width: 12px;
  height: 12px;
  min-width: 12px;
  min-height: 12px;
  border: 2px solid #fff;
  border-radius: 50%;
  box-sizing: border-box;
}
.weather-item__stick{
  width: 2px;
  height: calc(100% - 10px);
  background: #fff;
}
.weather-item__tooltip{
  position: absolute;
  transform: translate(-15px,-40px);
  width: 60px;
  height: 30px;
  background: red;
  display: block;
  border-radius: 5px;
  padding: 3px 5px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  &:before{
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    z-index: 0;
    width: 30px;
    height: 30px;
    transform: translate(-50%, 0%) rotate(-45deg);
    background: red;
    display: block;
    z-index: -1;
  }
  p{
    font-size: 9px;
    color: #fff;
    overflow: hidden;
    display: block;
  }
}
</style>