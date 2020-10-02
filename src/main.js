import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { ValidationProvider, ValidationObserver } from "vee-validate";

import "./assets/scss/index.scss";

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
