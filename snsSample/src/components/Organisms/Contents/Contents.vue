<template>
    <div class="column">
        <RegistBox v-on:regist="registWord"/>

        <article class="box media">
            <figure class="media-left">
                <p class="image is-64x64">
                    <img src="../../../assets/logo.png">
                </p>
            </figure>
            <div class="media-content">
                <div class="content" id="1">
                    <p><strong>ストレージを変更する</strong><br>
                        元画面にてストレージを変更し、当画面でストレージの変更を検知させる。<br><br>
                        <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                    </p>
                </div>
            </div>
        </article>
    </div>
</template>

<script>
import RegistBox from "@/components/Molecules/Box/RegistBox.vue";

export default {
    name: "Contents",
    data() {
        return {
            content: {}
        }
    },
    components: {
        RegistBox: RegistBox
    },
    methods: {
        async registWord() {
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

            console.log(data);
            this.content = data;
        }
    }
};
</script>
