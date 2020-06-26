<template>
  <div class="admin">
    <div id="afterlogin" v-if="getAuth">
      <button class="btn btn-danger " @click="Logout()">Logout</button>
      <form>
        <div class="form-group">
          <label for="inputId">Post ID</label>
          <input
            v-model="a"
            type="text"
            class="form-control"
            id="inputId"
            placeholder="Enter ID. This has to be unique integer following previous post IDs."
          />
        </div>
        <div class="form-group">
          <label for="">Post Title</label>
          <input
            v-model="b"
            type="text"
            class="form-control"
            id="inputTitle"
            placeholder="Input Title of the Post."
          />
        </div>
        <div class="form-group">
          <label for="inputDesc">Post Description</label>
          <input
            v-model="c"
            type="text"
            class="form-control"
            id="inputDesc"
            placeholder="Input Post Description. Limit 20 words."
          />
        </div>
      </form>
      <editor
        ref="toastuiEditor"
        :initialValue="editorText"
        :options="editorOptions"
        height="500px"
        initialEditType="wysiwyg"
        previewStyle="vertical"
        v-on:keyup.enter="addData()"
      ></editor>
      <button class="btn btn-primary" @click="addData()">Editor Data</button>
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
          v-on:keyup.enter="Auth"
        />
      </div>
      <button class="btn btn-success" @click="Auth()">Login</button>
    </div>
  </div>
</template>

<script>
import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/vue-editor";

export default {
  name: "Admin",
  props: [],
  components: {
    editor: Editor
  },
  data: function() {
    return {
      a: "",
      b: "",
      c: "",
      authId: "",
      authPass: "",
      mainId: "sambit",
      mainPass: "QaWsEd",
      editorText: "This is initialValue.",
      editorOptions: {
        hideModeSwitch: true
      },
      postBody:""
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
      var range = "main!A2:D";
      var majorDimension = "ROWS";
      this.postBody = this.$refs.toastuiEditor.invoke("getHtml")
      var values = [[this.a, this.b, this.c, this.postBody]];
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
