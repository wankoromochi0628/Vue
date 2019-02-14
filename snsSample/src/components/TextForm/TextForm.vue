<template>
    <div class="field">
        <div class="control">
            <textarea class="textarea is-primary" v-model="message" placeholder="最近起きたことを投稿してみよう"></textarea>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TextForm"
    };
</script>
