<template>
    <main class="columns">
        <Menu />
        <Contents />
    </main>
</template>

<script>
import Menu from "@/components/Menu/Menu.vue";
import Contents from "@/components/Organisms/Contents/Contents.vue";

export default {
    name: "Main",
    components:{
        Menu:Menu,
        Contents:Contents
    }
};
</script>
