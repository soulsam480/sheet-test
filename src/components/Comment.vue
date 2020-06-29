<template>
  <div class="comment">

      <form>
           <div class="form-group">
              <label for="Name">Your name</label>
              <input type="text" v-model="a" id="Name" class="form-control">
          </div>
          <div class="form-group">
              <label for="Comment">Add a comment</label>
              <input type="text" v-model="b" id="Comment" class="form-control">
          </div>
          <button class="btn btn-primary float-right" @click="postComment()" >Post</button>
      </form>
      
  </div>
</template>

<script>
export default {
  name: "Comment",
  props:['id'],
  data: function() {
    return {
        a: '',
        b: '',
        c: this.id
    };
  },
  methods:{
      postComment(){
      var range = "main!A2:C";
      var majorDimension = "ROWS";
      var values = [[this.a, this.b, this.c]];
      var body = {
        values: values
      };
       this.$gapi.getGapiClient().then(gapi => {
            gapi.client.sheets.spreadsheets.values
              .append({
                spreadsheetId: "1DTY_tds0fsJwHFCMlhDA1V1HH21W2NiK_XzN5Wvwn8w",
                range: range,
                valueInputOption: "RAW",
                resource: body,
                insertDataOption: "INSERT_ROWS"
              })
              .then(response => {
                var result = response.result;
               window.alert(`${result.updates.updatedRange} is added !`);
               /*  this.a++;
                this.b = "";
                this.c = "";
                this.postBody = "";
                this.picture = null;
                this.imageData = null; */
              });
          })
      /* if (this.$gapi.isAuthenticated() !== true) {
        this.$gapi.login().then(
          this.$gapi.getGapiClient().then(gapi => {
            gapi.client.sheets.spreadsheets.values
              .append({
                spreadsheetId: "1DTY_tds0fsJwHFCMlhDA1V1HH21W2NiK_XzN5Wvwn8w",
                range: range,
                valueInputOption: "RAW",
                resource: body,
                insertDataOption: "INSERT_ROWS"
              })
              .then(response => {
                var result = response.result;
               window.alert(`${result.updates.updatedRange} is added !`);
                this.a++;
                this.b = "";
                this.c = "";
                this.postBody = "";
                this.picture = null;
                this.imageData = null;
              });
          })
        );
      } else {
        this.$gapi.getGapiClient().then(gapi => {
        
          gapi.client.sheets.spreadsheets.values
            .append({
              spreadsheetId: "1GkfrnD4oaK-0v3BRnhQKopJb0sJt8p_MKMhH05UsIrk",
              range: range,
              valueInputOption: "RAW",
              resource: body
            
            })
            .then(response => {
              var result = response.result;
              window.alert(`${result.updates.updatedRange} is added !`);
              this.a++;
              this.b = "";
              this.c = "";
              this.postBody = "";
              this.picture = null;
              this.imageData = null;
            });
        });
      } */
          }
  }
};
</script>
