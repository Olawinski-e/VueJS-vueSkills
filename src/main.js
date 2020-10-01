import Vue from "vue";
import App from "./App.vue";
import { ValidationProvider } from "vee-validate";

import "./assets/scss/index.scss";

Vue.component("ValidationProvider", ValidationProvider);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
