<template>
  <div class="blog">
    <div class="col-3 p-1">
      <div class="card">
        <h5 class="card-header">{{ singleBlog[1] }}</h5>
        <div class="card-body">
          <h5 class="card-title">{{ singleBlog[2] }}</h5>
          <p class="card-text">yo</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router";
export default {
  name: "Blog",
  components: {},
  props: ["text"],
  data: () => {
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
