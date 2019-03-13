import Vue from 'vue'
import Router from 'vue-router'
import Contents from "@/components/Organisms/Contents/Contents.vue";
import Output from '@/components/Output' //①import


Vue.use(Router)

export default new Router({
routes: [
    {
        path: '/',
        name: 'Contents',
        component: Contents
    },

//②profile
    {
        path: '/outputs',
        name: 'Output',
        component: Output
    }
]
})