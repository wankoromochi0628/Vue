<template>
    <div>
        <TextForm class="text" />
        <RegistBtn class="btn" @regist='regist' />
        <!-- <RegistBtn /> -->
    </div>
</template>

<script>
import TextForm from "@/components/Atoms/TextForm/TextForm.vue";
import RegistBtn from "@/components/Atoms/Button/RegistBtn.vue";

export default {
    name: "RegistBox",
    components: {
        TextForm:TextForm,
        RegistBtn:RegistBtn
    },
    methods: {
        regist() {
            this.$emit('regist');
        }
    }
}
</script>

<style scoped>
    .text {
        margin: 10px 0px;
    }
    .btn {
        margin: 0px 0px 10px 0px;
        margin-right: 100%;
    }
</style>
