import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import Vuex from "vuex";
import store from "./store";
import VueGAPI from "vue-gapi";
import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firebase-database";
Vue.use(Vuex);
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const apiConfig = {
  //add your API key here from developer console
  apiKey: "AIzaSyDhfLBlkuRHQ4O_7MrPbaxpC8oW4XFeUms",
  //your client ID from developer console/Oauth
  clientId:
    "176219075281-91im132n5ua51g6oojlv7cs43gobprbs.apps.googleusercontent.com",
  discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4","https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],
  scope: "https://www.googleapis.com/auth/drive",
  refreshToken: true
};
firebase.initializeApp({
  //your firebase webapp config from firebaseproject/settings/webapp
  apiKey: "AIzaSyCUJYkjqhz3ZQdPddJFqfkotwaLnx9gD0s",
  authDomain: "sheet-test-4965a.firebaseapp.com",
  databaseURL: "https://sheet-test-4965a.firebaseio.com",
  projectId: "sheet-test-4965a",
  storageBucket: "sheet-test-4965a.appspot.com",
  messagingSenderId: "852067917099",
  appId: "1:852067917099:web:30cfdbfe4881e5a32af96e"
});
Vue.use(VueGAPI, apiConfig);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
