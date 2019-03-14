import Vue from "vue";
import Router from "vue-router";
import Contents from "@/components/Organisms/Contents/Contents.vue";
import About from "@/views/About.vue";
import Login from "@/views/Login.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: "/setting",
      name: "setting",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
