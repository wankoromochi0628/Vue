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

export default {
    name: "RegistBox",
    components: {
        TextForm:TextForm,
        RegistBtn:RegistBtn
    },
    methods: {
        regist() {
            // XMLHttpRequestオブジェクトを生成
            var xhr = new XMLHttpRequest();

            // サーバー通信時の処理を定義
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        console.log(xhr.response);
                    } else {
                        // result.textContent = 'サーバーエラーが発生しました。';
                    }
                } else {
                    // result.textContent = '通信中...';
                }
            };

            // 非同期通信を開始
            xhr.open('GET', ' http://localhost:3000/contents/', true);
            xhr.responseType = "json";
            xhr.send("");
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
