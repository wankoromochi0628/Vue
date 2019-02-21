<template>
  <div class="home">
    <Header/>
    <Main />
  </div>
</template>

<script>
import Header from "@/components/Organisms/Header/Header.vue";
import Main from "@/components/Main/Main.vue";

export default {
  name: "About",
  components: {
    Header,
    Main
  }
};
</script>

<style scoped>

</style>