import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import axios from "axios";
import VueAxios from "vue-axios";

import VueApexCharts from 'vue-apexcharts'


Vue.use(VueAxios, axios);
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

Vue.config.productionTip = process.env.NODE_ENV === "production";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
