import Vue from "vue";
import Router from "vue-router";
import About from "@/views/About.vue";
import Signup from "@/components/Signup";
import Signin from "@/components/Signin";

Vue.use(Router);

const router = new Router({
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

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) next('signin')
  else if (!requiresAuth && currentUser) next()
  else next()
})

export default router