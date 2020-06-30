import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const axios = require("axios").default;

export default new Vuex.Store({
  state: {
    data: [],
    auth: false,
    dark: false
  },
  mutations: {
    addData(state, response) {
      state.data = response;
    },
    cAuth(state) {
      state.auth = !state.auth;
    },
    cDark(state){
      state.dark = !state.dark;
    }
  },
  actions: {
    addDataAction(context, response) {
      axios
        .get(
          "https://sheets.googleapis.com/v4/spreadsheets/" +
            "1GkfrnD4oaK-0v3BRnhQKopJb0sJt8p_MKMhH05UsIrk" + //your spreadsheet ID here
            "/values/main!A2:E?key=" +
            "AIzaSyDhfLBlkuRHQ4O_7MrPbaxpC8oW4XFeUms" //your API key here
        )
        .then(response => {
          var res = response.data.values;
          context.commit("addData", res);
        })
        .catch(error => {
          console.log(error);
          this.errored = true;
        });
    },
    changeAuth(context) {
      context.commit("cAuth");
    },
    changeDark(context){
      context.commit("cDark")
    }
  },
  getters: {
    giveData(state) {
      return state.data;
    },
    singleBlog: state => id => {
      return state.data[id];
    },
    getAuth(state) {
      return state.auth;
    },
    getDark(state){
      return state.dark;
    }
  }
});
