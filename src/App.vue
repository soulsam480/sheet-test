<template>
  <div id="app" >
<!--     :class="{darkmode : getDark}"
 -->    <Navbar />
    <div class="container-fluid">
      <router-view />
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "app",
  components: {
    Navbar
  },
  computed: {
   /*  getDark() {
      return this.$store.getters.getDark;
    } */
  },
  created() {
    this.$store.dispatch("addDataAction");
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
/* .darkmode {
  background-color: #121212 !important;
  color: #ffffff !important;
}
.darkmode a {
  color: white;
}
.darkmode .card{
  background-color: #161616 !important;
  color: #ffffff;
  }
.darkmode .card:hover{
  box-shadow: 0 0  20px 0px #191919;
}
.darkmode .card .card-header{
  background-color: #191919
}
.admin .form-control{
  background-color: #161616;
  border:none !important;
}
.darkmode .form-control:focus{
  background-color: #161616 !important;
  box-shadow: 0 0  20px 0px rgba(8, 8, 8, 0.815);
  color: #ffffff
}
/* .darkmode .tui-editor-defaultUI-toolbar{
  background-color: #161616 !important;
  color: #ffffff !important;
}
.darkmode .te-ww-container{
  background-color: #161616;
  color: #ffffff !important
}
.darkmode .te-ww-container .tui-editor-contents{
  color: #ffffff !important
} */ */
#app {
  font-family: "Open Sans", sans-serif !important;
  min-height: 100vh !important;
}
</style>
