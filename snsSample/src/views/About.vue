<template>
  <div class="home">
    <Header />
    <Main />
  </div>
</template>

<script>
import Main from "@/components/Main/Main.vue";
import Header from "@/components/Organisms/Header/Header.vue";

export default {
  name: "About",
  components: {
    Main,
    Header
  }
};
</script>
