import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentWeatherData: null,
    rainWeatherData: null,
    forecastWeatherData: null,
    forecastWeatherImages: null
    
  },
  mutations: {},
  actions: {

  }
});