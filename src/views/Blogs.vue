<template>
  <div class="blogs">
    <br />
    <div class="row">
      <div class="col-sm-4 p-1" v-for="item in giveData" :key="item[0]">
        <router-link :to="{ path: '/blog/' + item[0] }">
          <div class="card " >
<!--             @mouseover="hover = true" @mouseleave="hover = false" :class="{ shadow : hover }" 
 -->            <h5 class="card-header">{{ item[1] }}</h5>
            <div class="card-body">
              <p class="card-text">{{ item[2] }}</p>
            </div>
          </div></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blogs",
  components: {},
  props: [],
  data: function() {
    return {
    };
  },
  computed: {
    giveData() {
      return this.$store.getters.giveData;
    }
  }
};
</script>

<style scoped>
a {
  color: black;
}
a:hover {
  text-decoration: none;
}
.card:hover{
  box-shadow: 0 0  20px 0px rgba(0, 0, 0, 0.452);
}
</style>
