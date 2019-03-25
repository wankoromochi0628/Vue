<template>
    <div class="column">
        <RegistBox v-on:regist="registContent" @updateSentence="setSentence"/>

        <article class="box media" v-for="(content, index) in contents" v-bind:key="index">
            <figure class="media-left">
                <p class="image is-64x64">
                    <img src="../../../assets/logo.png">
                </p>
            </figure>
            <div class="media-content" >
                <div class="content" >
                    <p>ID:{{content.id}}<br><strong>{{content.name}}</strong><br>
                        {{content.words}}<br>
                        <small><a v-on:click="deleteContent(content.id)">delete</a> · 2 hrs</small>
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
            contents: {},
            sentence: {
                type: String,
                description: "登録する投稿内容"
            },
            id: {
                type: Number,
                description: "投稿ID"
            }
        }
    },
    components: {
        RegistBox: RegistBox
    },
    methods: {
        // 投稿内容更新
        setSentence(newSentence) {
            this.sentence = newSentence;
            console.log("Contents：" + newSentence);
        },

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

        this.$refs.RegistBox.clearTextForm();
        },

        // 登録メソッド
        async registContent(postSentence) {
            fetch('http://localhost:3000/contents/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'name': 'wankoromochi0628',
                    'words': this.sentence
                })
            }).then(res => res.json());
        },

        // 削除メソッド
        async deleteContent(id) {
            fetch('http://localhost:3000/contents/' + id, {
                method: 'DELETE'
            }).then(console.log);

            console.log(id + "を削除しました。");
        }
    }
};
</script>
