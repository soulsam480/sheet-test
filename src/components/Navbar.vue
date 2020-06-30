<template>
  <nav class="navbar navbar-expand-lg sticky-top" style="width:100%;">
    <router-link to="/" class="navbar-brand">Sambit Sahoo</router-link>
    <!--          <div class="darkone">
        <label class="switch">
          <input type="checkbox"  @click='darkMode'>
          <span class="slider round"></span>
        </label>
      </div> -->
   <!--  <button>
      <span class="navbar-toggler-icon"></span>
    </button> -->
    <a @click="changeNav()"
      class="hamburger menu-btn navbar-toggler"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
      id="nav-tog"
      ><span></span
    ></a>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/about" class="nav-link text-dark"
            >About</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/blogs" class="nav-link text-dark"
            >Blogs</router-link
          >
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
    return {};
  },
  computed: {},
  methods: {
    changeNav(){
      document.getElementById('nav-tog').classList.toggle('active')
    }
    /* darkMode(){
      this.$store.dispatch("changeDark")
    } */
  }
};
</script>
<style scoped>
.navbar-brand{
  color: black
}
.navbar{
  background-color: #ebebeb;
}
.hamburger {
    display: block;
    float: right;
    width: 28px;
    height: 27px;
    padding: 0px 5px 0 0;
    position: relative;
    z-index: 999999;
}
@media only screen and (min-width:768px){
    .hamburger{
        display: none;
    }
}
 
.hamburger span {
    margin: -2px 0 0;
    position: absolute;
    top: 50%;
    width: 28px;
    height: 3px;
    background-color: rgb(3, 3, 3);
    display: none;
    -webkit-transition-duration: 0s;
    -moz-transition-duration: 0s;
    transition-duration: 0s;
    -webkit-transition-delay: 0.2s;
    -moz-transition-delay: 0.2s;
    -o-transition-delay: 0.2s;
    -ms-transition-delay: 0.2s;
    transition-delay: 0.2s
}
 
.hamburger span {
    display: block
}
 
.hamburger span:before, .hamburger span:after {
    position: absolute;
    content: ''
}
 
.hamburger span:before, .hamburger span:after {
    width: 28px;
    height: 3px;
    background-color: #353E4A;
    display: block
}
 
.hamburger span:before {
    margin-top: -10px
}
 
.hamburger span:after {
    margin-top: 10px
}
 
.hamburger span:before {
    -webkit-transition-property: margin, -webkit-transform;
    -webkit-transition-duration: .2s;
    -webkit-transition-delay: .2s, 0s;
    -moz-transition-property: margin, -moz-transform;
    -moz-transition-duration: .2s;
    -moz-transition-delay: .2s, 0s;
    transition-property: margin, transform;
    transition-duration: .2s;
    transition-delay: .2s, 0s
}
 
.hamburger span:after {
    -webkit-transition-property: margin, -webkit-transform;
    -webkit-transition-duration: .2s;
    -webkit-transition-delay: .2s, 0s;
    -moz-transition-property: margin, -moz-transform;
    -moz-transition-duration: .2s;
    -moz-transition-delay: .2s, 0s;
    transition-property: margin, transform;
    transition-duration: .2s;
    transition-delay: .2s, 0s
}
 
.hamburger:hover {
    border: none
}
 
.hamburger.active span {
    background-color: rgba(0,0,0,0);
    -webkit-transition-delay: 0.2s;
    -moz-transition-delay: 0.2s;
    -o-transition-delay: 0.2s;
    -ms-transition-delay: 0.2s;
    transition-delay: 0.2s
}
 
.hamburger.active span:before {
    margin-top: 0;
    -webkit-transform: rotate(45deg);
    -webkit-transition-delay: 0s, .2s;
    -moz-transform: rotate(45deg);
    -moz-transition-delay: 0s, .2s;
    transform: rotate(45deg);
    transition-delay: 0s, .2s
}
 
.hamburger.active span:after {
    margin-top: 0;
    -webkit-transform: rotate(-45deg);
    -webkit-transition-delay: 0s, .2s;
    -moz-transform: rotate(-45deg);
    -moz-transition-delay: 0s, .2s;
    transform: rotate(-45deg);
    transition-delay: 0s, .2s
}
 
.main-menu-wrap {
    box-shadow:inset 0 0 10px #c7c7c7;

    float: right;
    z-index: 9999;
    position: absolute;
    right: 0;
    width: 100%;
    background: #fcf5e2;
    width: 0;
    height: 100%;
    overflow: auto;
    transition: width 0.6s cubic-bezier(0.5, 1, 0.22, 1);
    -webkit-transition: width 0.6s cubic-bezier(0.5, 1, 0.22, 1);
}
 
.main-menu {
    padding-top: 50px;
    transition: opacity 0.5s ease-in-out;
    -webkit-transition: opacity 0.5s ease-in-out;
}
 
.menu-active .main-menu {
    opacity: 1;
    transition: opacity 0.2s 0.2s ease-in-out;
    -webkit-transition: opacity 0.2s 0.2s ease-in-out;
}
 
.main-menu a {
    color: #353E4A;
    display: block;
    font-size: 1.5em;
    font-weight: 700;
    margin-bottom: 10px;
    padding: 10px;
    text-decoration: none;
}
 
.main-menu a:hover, .main-menu a:active {
    color: #004d67;
}

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
