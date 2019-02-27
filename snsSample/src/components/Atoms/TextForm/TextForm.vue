<template>
    <div class="field">
        <div class="control">
            <textarea v-model="postSentence" class="textarea is-primary" placeholder="最近起きたことを投稿してみよう"></textarea>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TextForm",
        data() {
            return {
                postSentence: "テスト"
            }
        }
    };
</script>
