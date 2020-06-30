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
  apiKey: "Your API Key",
  // From google developers console
  clientId: "Your Client ID",
  // From google developers console OAuth
  discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
  scope: "https://www.googleapis.com/auth/sheets",
  refreshToken: true
};
firebase.initializeApp({
  apiKey: "Your API Key",
  authDomain: "Your Auth Domain",
  databaseURL: "Your Database URL",
  projectId: "Your Project ID",
  storageBucket: "Your Storage Bucket",
  messagingSenderId: "Messaging sender ID",
  appId: "Your APP ID"
});
Vue.use(VueGAPI, apiConfig);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
