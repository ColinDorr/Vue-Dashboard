import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import axios from "axios";
import VueAxios from "vue-axios";

import VueGlide from "vue-glide-js";
import "vue-glide-js/dist/vue-glide.css";

Vue.use(VueGlide);
Vue.use(VueAxios, axios);

Vue.config.productionTip = process.env.NODE_ENV === "production";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
