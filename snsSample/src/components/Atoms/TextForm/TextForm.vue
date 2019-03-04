<template>
    <div class="field">
        <div class="control">
            {{sentence.text}}
            <textarea v-model="sentence" class="textarea is-primary" placeholder="最近起きたことを投稿してみよう"></textarea>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TextForm",
        props: {
            postSentence: {
                type: String,
                description: "投稿内容"
            }
        },
        computed: {
            sentence: {
                get() {
                    return this.postSentence;
                },
                set(newSentence) {
                    this.postSentence = newSentence;
                    this.$emit('writtenSentence', this.postSentence)
                }
            }
        }
    };
</script>
