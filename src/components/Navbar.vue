<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" style="width:100%;">
      <router-link to="/" class="navbar-brand" >Testapp</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          
            <router-link to="/about" class="nav-link">About</router-link>
        
        </li>
        <li class="nav-item">
                      <router-link to="/blogs" class="nav-link">Blogs</router-link>

        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {},
  data: () => {
    return {
    };
  }
};
</script>
