<template>
    <div class="column">
        <RegistBox v-on:regist="registContent"/>

        <article class="box media" v-for="(content) in contents">
            <figure class="media-left">
                <p class="image is-64x64">
                    <img src="../../../assets/logo.png">
                </p>
            </figure>
            <div class="media-content" >
                <div class="content" >
                    <p><strong>{{content.name}}</strong><br>
                        {{content.words}}<br>
                        <small><a>delete</a> · 2 hrs</small>
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
    created: function() {
        this.dispContents();
    },
    updated: function() {
        this.dispContents();
    },
    data() {
        return {
            contents: {}
        }
    },
    components: {
        RegistBox: RegistBox
    },
    methods: {
        // 表示メソッド
        async dispContents() {
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

        this.contents = data;
        },

        // 登録メソッド
        async registContent(postSentence) {
            console.log(postSentence);
            fetch('http://localhost:3000/contents/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'name': 'y_suzuki',
                    'words': '新しい投稿です。'
                })
            }).then(res => res.json());
        }
    }
};
</script>
