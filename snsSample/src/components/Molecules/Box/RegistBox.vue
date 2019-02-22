<template>
    <div>
        <TextForm class="text" />
        <RegistBtn class="btn" @regist='regist' />
    </div>
    <!-- <RegistBtn class="btn" @regist="regist" /> -->
</template>

<script>
import TextForm from "@/components/Atoms/TextForm/TextForm.vue";
import RegistBtn from "@/components/Atoms/Button/RegistBtn.vue";
import {API_URI} from "../../../constants/constants.js";

export default {
    name: "RegistBox",
    components: {
        TextForm:TextForm,
        RegistBtn:RegistBtn
    },
    props: ['content'],
    methods: {
        async regist() {
            // axios を require してインスタンスを生成する
            const axiosBase = require('axios');
            const axios = axiosBase.create({
                headers: {
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                },
                responseType: 'json'
            });

            const {data} = await axios.get("http://localhost:3000/contents/");

            this.$parent.content = data;
            console.log(this.$parent.content);
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
