<template>
  <div id="app">
    <Navbar/>
<div class="container-fluid">
      <router-view/>

</div>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'app',
  components: {
    Navbar
  },
  created() {
  this.$store.dispatch('addDataAction');
}
}
</script
<style>

</style>
