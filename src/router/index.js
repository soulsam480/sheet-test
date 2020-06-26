import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: () => import("../views/Blogs.vue")
  },
  {
    path: "/blog/:id",
    name: "Blog",
    props: true,
    component: () => import("../views/Blog.vue")
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../views/Admin.vue")
  }
];

const router = new VueRouter({
  routes
});

/* optional to add the route protection
 */
/* router.beforeEach((to, from, next) => {
  if (to.name !== 'Admin' && $isAuthenticated() !== true) next({ name: 'Admin' })
  else next()
}); */
export default router;
