<template>
  <div class="blog">
    <p> {{this.$route.params.text}} </p>
    {{id}}
  </div>
</template>

<script>
import router from "../router";
export default {
  name: "Blog",
  components: {},
  props:[
      'text',
  ],
  data: function() {
    return {
      id: this.$route.params.id,
      main: this.$route.params.text
    };
  },
  created(){
  }
};
</script>

<style>
</style>
[]