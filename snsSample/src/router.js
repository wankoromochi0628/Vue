import Vue from "vue";
import Router from "vue-router";
import About from "@/views/About.vue";
import Signup from "@/components/Signup";
import Signin from "@/components/Signin";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'About',
      component: About,
      meta: { requiresAuth: true }
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ]
});
