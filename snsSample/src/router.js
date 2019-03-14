import Vue from "vue";
import Router from "vue-router";
import Contents from "@/components/Organisms/Contents/Contents.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Contents',
      component: Contents
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
