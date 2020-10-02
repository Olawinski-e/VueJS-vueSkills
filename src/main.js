import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { ValidationProvider, ValidationObserver } from "vee-validate";

import "./assets/scss/index.scss";

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
