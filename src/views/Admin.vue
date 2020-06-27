<template>
  <div class="admin p-2">
    <div id="afterlogin" v-if="getAuth">
      <h5>
        Admin : <b class="text-info">{{ mainId }}</b>
        <button class="btn btn-danger float-right " @click="Logout()">
          Admin Logout
        </button>
      </h5>
      <br />
      <h3 class="text-center">Add a Post</h3>
      <form>
        <!--  <div class="form-group">
          <label for="inputId"> <b>Post ID</b> </label>
          <input
            v-model="a"
            type="text"
            class="form-control"
            id="inputId"
            placeholder="Enter ID. This has to be an unique integer following exactly previous post ID."
          />
        </div> -->
        <div class="form-group">
          <label for=""> <b> Post Title</b></label>
          <input
            v-model="b"
            type="text"
            class="form-control"
            id="inputTitle"
            placeholder="Input Title of the Post."
          />
        </div>
        <div class="form-group">
          <label for="inputDesc"> <b>Post Description</b> </label>
          <input
            v-model="c"
            type="text"
            class="form-control"
            id="inputDesc"
            placeholder="Input Post Description. Limit 20 words."
          />
        </div>
        <div class="form-group">
          <label for="Image"> <b> Post Cover Image</b></label>

          <input
            type="file"
            class="form-control-file"
            @change="previewImage"
            accept="image/*"
            id="Image"
          />
          <br />
          <p>
            {{ uploadValue.toFixed() + "%" }}
            <progress id="progress" :value="uploadValue" max="100"></progress>
          </p>
          <button
            class="btn btn-primary"
            :disabled="!imageData"
            @click="onUpload()"
          >
            Upload Image
          </button>
        </div>
      </form>
      <label for="postContent"> <b>Post Content</b> </label>
      <editor
        ref="toastuiEditor"
        :initialValue="editorText"
        :options="editorOptions"
        height="500px"
        initialEditType="wysiwyg"
        previewStyle="vertical"
        v-on:keyup.enter="addData()"
        id="postContent"
      ></editor>
      <br />

      <br />
      <button class="btn btn-primary" @click="addData()">Commit Post</button>
      <br />
      <br />
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
import firebase from "firebase";
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
      imageData: null,
      picture: null,
      uploadValue: 0,
      editorText: "Add post content here",
      editorOptions: {
        hideModeSwitch: true
      },
      postBody: ""
    };
  },
  computed: {
    getAuth() {
      return this.$store.getters.getAuth;
    }
  },
  methods: {
    previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
    },

    onUpload() {
      this.picture = null;
      const storageRef = firebase
        .storage()
        .ref(`${this.imageData.name}`)
        .put(this.imageData);
      storageRef.on(
        `state_changed`,
        snapshot => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        error => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then(url => {
            this.picture = url;
          });
        }
      );
    },
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
      var range = "main!A2:E";
      var majorDimension = "ROWS";
      this.postBody = this.$refs.toastuiEditor.invoke("getHtml");
      var values = [[this.a, this.b, this.c, this.postBody, this.picture]];
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
                this.a++;
                this.b = "";
                this.c = "";
                this.postBody = "";
                this.picture = null;
                thid.imageData = null;
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
              this.a++;
              this.b = "";
              this.c = "";
              this.postBody = "";
              this.picture = null;
              this.imageData = null
            });
        });
      }
    }
  },
  async created() {
    this.$gapi.getGapiClient().then(gapi => {
      gapi.client.sheets.spreadsheets.values
        .get({
          spreadsheetId: "1GkfrnD4oaK-0v3BRnhQKopJb0sJt8p_MKMhH05UsIrk",
          range: "A2:E"
        })
        .then(response => {
          var result = response.result.values;
          this.a = result[result.length - 1][0];
          this.a++;
        });
    });
  }
};
</script>
