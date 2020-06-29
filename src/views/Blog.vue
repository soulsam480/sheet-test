<template>
  <div class="container">
    <h1 class="display-4">{{ singleBlog[1] }}</h1>
<!--     <p class="lead">The id of this post is : {{ singleBlog[0] }}</p>
 -->    <img :src="singleBlog[4]" class="img-fluid" alt="Responsive image" />
    <div v-html="singleBlog[3]">{{ singleBlog[3] }}</div>
<!--   <Comment :id="this.id" />
 -->    
  </div>
</template>

<script>
import router from "../router";
/* import Comment from '@/components/Comment.vue'
 */export default {
  name: "Blog",
  components: {
  /*   Comment */
  },
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
