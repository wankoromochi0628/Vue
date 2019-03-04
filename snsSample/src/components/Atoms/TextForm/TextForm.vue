<template>
    <div class="field">
        <div class="control">
            {{sentence.text}}
            <textarea v-model="sentence.text" class="textarea is-primary" placeholder="最近起きたことを投稿してみよう"></textarea>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TextForm",
        props: {
            postSentence
        },
        computed: {
            sentence: {
                get() {
                    return this.sentence;
                },
                set(newSentence) {
                    this.sentence;
                }
            }
        },
        data() {
            return {
                postSentence :String
            }
        }
    };
</script>
