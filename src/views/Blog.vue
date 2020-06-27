<template>
  <div class="container-fluid">
    <h1 class="display-4">{{ singleBlog[1] }}</h1>
<!--     <p class="lead">The id of this post is : {{ singleBlog[0] }}</p>
 -->    <img :src="singleBlog[4]" class="img-fluid" alt="Responsive image" />
    <div v-html="singleBlog[3]">{{ singleBlog[3] }}</div>
  </div>
</template>

<script>
import router from "../router";
export default {
  name: "Blog",
  components: {},
  props: [],
  data: function() {
    return {
      id: this.$route.params.id
    };
  },
  created() {},
  computed: {
    singleBlog() {
      return this.$store.getters.singleBlog(this.id);
    }
  }
};
</script>

<style></style>
