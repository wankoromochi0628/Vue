<template>
    <div class="column">
        <RegistBox v-on:regist="registContent" @updateSentence="setSentence"/>

        <article class="box media" v-for="(content, index) in reverseContents" v-bind:key="index">
            <figure class="media-left">
                <p class="image is-64x64">
                    <img src="../../../assets/logo.png">
                </p>
            </figure>
            <div class="media-content" >
                <div class="content" >
                    <p><strong>{{content.name}}</strong><br>
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

        let mail = firebase.auth().currentUser.email;
        var pos = mail.indexOf("@");

        console.log(pos);
        if (pos < 0) {
            this.name = "@" + mail;
            console.log("文字列整形失敗" + this.name);
        } else {
            this.name = "@" + mail.substring(0, pos);
            console.log("文字列整形成功" + this.name);
        }
    },
    updated: function() {
        this.dispContents();
    },
    data() {
        return {
            contentsData: [
                {
                    id: {
                        type: Number,
                        description: "投稿ID"
                    },
                    sentence: {
                        type: String,
                        description: "登録する投稿内容"
                    },
                    name: {
                        type: String,
                        description: "投稿者名"
                    }
                }
            ]
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

        this.contentsData = data;
        console.log(data);
        console.log(contentsData);
        },

        // 登録メソッド
        async registContent(postSentence) {
            fetch('http://localhost:3000/contents/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'name': this.name,
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
    },
    computed: {
        // 配列の要素順番を逆順にする
        reverseContents() {
            return this.contentsData.slice().reverse();
        }
    }
};
</script>
