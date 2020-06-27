import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const axios = require("axios").default;

export default new Vuex.Store({
  state: {
    data: [],
    auth: false
  },
  mutations: {
    addData(state, response) {
      state.data = response;
    },
    cAuth(state) {
      state.auth = !state.auth;
    }
  },
  actions: {
    addDataAction(context, response) {
      axios
        .get(
          "https://sheets.googleapis.com/v4/spreadsheets/" +
            "1GkfrnD4oaK-0v3BRnhQKopJb0sJt8p_MKMhH05UsIrk" +
            "/values/main!A2:E?key=" +
            "AIzaSyDhfLBlkuRHQ4O_7MrPbaxpC8oW4XFeUms"
        )
        .then(response => {
          var res = response.data.values;
          context.commit("addData", res);
        })
        .catch(error => {
          console.log(error);
          this.errored = true;
        });

      /*  this.$getGapiClient().then(gapi => {
          gapi.client.sheets.spreadsheets.values
            .get({
              spreadsheetId: "1GkfrnD4oaK-0v3BRnhQKopJb0sJt8p_MKMhH05UsIrk",
              range: "A:C"
            })
            .then(response => {
              var result = response.result;
             var res = result.data.values;
             context.commit('addData',res);
            console.log(result);
            });
        }); */
    },
    changeAuth(context) {
      context.commit("cAuth");
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
    }
  }
});
