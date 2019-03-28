<template>
    <div class="field">
        <div class="control">
            {{sentence}}
            <textarea v-model="sentence" class="textarea is-primary" placeholder="最近起きたことを投稿してみよう"></textarea>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TextForm",
        props: {
            sentence: {
                type: String,
                description: "投稿内容"
            }
        },
        methods: {
            clearText() {
                this.sentence = "";
            }
        },
        computed: {
            sentence: {
                get() {
                    return this.postSentence;
                },
                set(newSentence) {
                    this.$emit('writtenSentence', newSentence);
                }
            }
        }
    };
</script>
