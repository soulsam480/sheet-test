<template>
  <div class="admin">
    <p>admin works</p>
    <div id="afterlogin" v-if="getAuth">
      <button class="btn btn-danger " @click="Logout()">Logout</button>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            v-model="a"
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted"
            >We'll never share your email with anyone else.</small
          >
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            v-model="b"
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            v-model="c"
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>

        <button type="submit" class="btn btn-primary" @click="addData()">
          Submit
        </button>
      </form>
    </div>
    <div id="beforelogin" v-else>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          v-model="authId"
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          v-model="authPass"
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <button class="btn btn-success" @click="Auth()">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Admin",
  props: [],
  data: () => {
    return {
      a: "",
      b: "",
      c: "",
      authId: "",
      authPass: "",
      mainId: "sambit",
      mainPass: "QaWsEd"
    };
  },
  computed: {
    getAuth() {
      return this.$store.getters.getAuth;
    }
  },
  methods: {
    Logout() {
      this.$store.dispatch("changeAuth");
    },
    Auth() {
      if (this.mainId === this.authId && this.mainPass === this.authPass) {
        this.$store.dispatch("changeAuth");
      } else {
        console.log("error");
      }
    },
    addData() {
      var range = "main!A13:C";
      var majorDimension = "ROWS";
      var values = [[this.a, this.b, this.c]];
      var body = {
        values: values
      };
      if (this.$gapi.isAuthenticated() !== true) {
        this.$gapi.login().then(
          this.$gapi.getGapiClient().then(gapi => {
            // gapi.sheets.spreadsheet.get(...)
            // ...
            gapi.client.sheets.spreadsheets.values
              .append({
                spreadsheetId: "1GkfrnD4oaK-0v3BRnhQKopJb0sJt8p_MKMhH05UsIrk",
                range: range,
                valueInputOption: "RAW",
                resource: body,
                insertDataOption: "INSERT_ROWS"
              })
              .then(response => {
                var result = response.result;
                console.log(`${result.updatedCells} cells updated.`);
              });
          })
        );
      } else {
        this.$gapi.getGapiClient().then(gapi => {
          // gapi.sheets.spreadsheet.get(...)
          // ...
          gapi.client.sheets.spreadsheets.values
            .append({
              spreadsheetId: "1GkfrnD4oaK-0v3BRnhQKopJb0sJt8p_MKMhH05UsIrk",
              range: range,
              valueInputOption: "RAW",
              resource: body
              /*               insertDataOption: "INSERT_ROWS"
               */
            })
            .then(response => {
              var result = response.result;
              window.alert(`${result.updatedCells} cells updated.`);
            });
        });
      }
    }
  },
  async mounted() {
    /* this.$gapi.getGapiClient().then(gapi => {
      gapi.client.sheets.spreadsheets.values
        .get({
          spreadsheetId: "1GkfrnD4oaK-0v3BRnhQKopJb0sJt8p_MKMhH05UsIrk",
          range: "A:C"
        })
        .then(response => {
          var result = response.result;
        console.log(result)
        });
    }); */
  }
};
</script>
