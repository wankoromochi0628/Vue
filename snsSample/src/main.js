import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import firebase from 'firebase';

Vue.use(Buefy)

Vue.config.productionTip = false;

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAvZGE3cQxsy5kx3yXWu1um9r13xru6D5I",
  authDomain: "snssample-40019.firebaseapp.com",
  databaseURL: "https://snssample-40019.firebaseio.com",
  projectId: "snssample-40019",
  storageBucket: "snssample-40019.appspot.com",
  messagingSenderId: "913316767534"
};
firebase.initializeApp(config);


let app
// ...

firebase.auth().onAuthStateChanged(user => {
  /* eslint-disable no-new */
  if (!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
})


