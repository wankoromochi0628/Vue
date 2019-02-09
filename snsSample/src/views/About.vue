<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Header msg="Welcome to Your Vue.js Test" />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";

export default {
  name: "home",
  components: {
    Header,
    Main
  }
};
</script>