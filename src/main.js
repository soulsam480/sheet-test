import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import Vuex from "vuex";
import store from "./store";
import VueGAPI from "vue-gapi";

Vue.use(Vuex);
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const apiConfig = {
  apiKey: "AIzaSyDhfLBlkuRHQ4O_7MrPbaxpC8oW4XFeUms",
  clientId:
    "176219075281-91im132n5ua51g6oojlv7cs43gobprbs.apps.googleusercontent.com",
  discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
  scope: "https://www.googleapis.com/auth/spreadsheets",

  refreshToken: true
};

Vue.use(VueGAPI, apiConfig);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
