import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    count: 0
};

const mutations = {
    countUp(state,payload) {
    }
};

const actions = {
    // getHeaderInfo({commit},payload) {
    getHeaderInfo({commit}) {
        console.log('action成功');
        // commit('countUp',payload);
    }
};

export default new Vuex.Store({
    state: state,
    mutations: mutations,
    actions: actions
});
