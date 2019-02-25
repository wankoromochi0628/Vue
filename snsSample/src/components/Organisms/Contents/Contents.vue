<template>
    <div class="column">
        <RegistBox v-on:regist="registContent"/>

        <article class="box media" v-for="(content) in contents">
            <figure class="media-left">
                <p class="image is-64x64">
                    <img src="../../../assets/logo.png">
                </p>
            </figure>
            <div class="media-content">
                <div class="content" >
                    <p><strong>{{content.name}}</strong><br>
                        {{content.words}}<br>
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
            contents: {}
        }
    },
    components: {
        RegistBox: RegistBox
    },
    async mounted() {
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
        console.log(this.content);
    },
    methods: {
        // async dispContents() {
        //     // axios を require してインスタンスを生成する
        //     const axiosBase = require('axios');
        //     const axios = axiosBase.create({
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'X-Requested-With': 'XMLHttpRequest'
        //         },
        //         responseType: 'json'
        //     });

        //     const {data} = await axios.get("http://localhost:3000/contents/");

        //     console.log(data);
        //     this.content = data;
        //     console.log(this.content);
        // }
        async registContent() {
            await axios.post("http://localhost:3000/contents/", {
                name: "y_suzuki",
                words: 
            });
            // await axios.get("http://localhost:3000/contents/");
        }
    }
};
</script>
