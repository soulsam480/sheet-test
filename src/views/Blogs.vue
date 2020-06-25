<template>
  <div class="blogs">
    <br />
    <div class="row">
      <div class="col-3 p-1" v-for="item in posts" :key="item[0]">
          <div class="card">
        <h5 class="card-header"> {{item[1]}} </h5>
        <div class="card-body">
          <h5 class="card-title">{{item[2]}}</h5>
          <p
            class="card-text"
          >yo</p>
          <router-link :to="{path: '/blog/'+ item[0]  }" ><a class="btn btn-primary">Visit</a></router-link> 
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios").default;
export default {
  name: "Blogs",
  components: {},
  props:[
      'text'
],
  data: function() {
    return {
      posts: [],
    };
  },
   beforeCreate() {
     axios
      .get(
        "https://sheets.googleapis.com/v4/spreadsheets/" +
          "1GkfrnD4oaK-0v3BRnhQKopJb0sJt8p_MKMhH05UsIrk" +
          "/values/main!A:C?key=" +
          "AIzaSyDhfLBlkuRHQ4O_7MrPbaxpC8oW4XFeUms"
      )
      .then(response => {
        console.log(response);
        this.posts = response.data.values;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>

<style></style>
