<template>
  <div class="blogs">
    <br />
    <div class="row">
      <div class="col-3 p-1" v-for="item in giveData" :key="item[0]">
        <div class="card">
           <router-link :to="{ path: '/blog/' + item[0] }">
              <h5 class="card-header">{{ item[1] }}</h5>
            </router-link>
          <div class="card-body">
            <h5 class="card-title">{{ item[2] }}</h5>
            <p class="card-text">yo</p>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blogs",
  components: {},
  props: [],
  data: () => {
    return {};
  },
  computed: {
    giveData() {
      return this.$store.getters.giveData;
    }
  }
};
</script>

<style></style>
