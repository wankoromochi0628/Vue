import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

Vue.use(Vuex);
Vue.use(Buefy);

Vue.config.productionTip = false;

const state = {
    count: 0
};

const mutations = {
    countUp(state,payload) {
    }
};

const actions = {
    // getHeaderInfo({commit},payload) {
    getHeaderInfo(state) {
        console.log('action成功');
        // commit('countUp',payload);
    }
};

export default new Vuex.Store({
    state: state,
    mutations: mutations,
    actions: actions
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
