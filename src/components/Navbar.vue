<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" style="width:100%;">
      <router-link to="/" class="navbar-brand" >Testapp</router-link>
<!--          <div class="darkone">
        <label class="switch">
          <input type="checkbox"  @click='darkMode'>
          <span class="slider round"></span>
        </label>
      </div> -->
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
  },
  computed:{
  },
  methods:{
    /* darkMode(){
      this.$store.dispatch("changeDark")
    } */
  }
};
</script>
<style>
/*     .darkone{
      padding-right: 10px;
    }
    .switch {
        position: relative;
        width: 45px;
        display: inline-block;
        height: 21px;
    }
      .switch input {
        opacity: 0;
        width: 0;
        height: 0;
      }
      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #333333;
        -webkit-transition: 0.4s;
        transition: 0.4s;
      }
      .slider:before {
        position: absolute;
        content: "";
        height: 15px;
        width: 15px;
        top:3px;
        bottom: 3px;
        left: 2px;
        right: 2px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
      }
      input:checked + .slider {
        background-color: #ccc;
      }
      input:focus + .slider {
        box-shadow: 0 0 1px white;
      }
      input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
      }
      input:checked + .slider.round:before{
        background-color: rgb(37, 37, 37);
      }
      .slider.round {
        border-radius: 100px;
      }
      .slider.round:before {
        border-radius: 50%;
        content: "";
        color: black;
      } */
</style>

