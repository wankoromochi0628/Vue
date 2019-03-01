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
            sentence:Object
        },
        // updated: function() {
        //     console.log(this.sentence);
        //     this.postSentence = this.sentence
        // },
        computed: {
            print() {
                return this.sentence
            }
        },
        data() {
            return {
                // postSentence :String
            }
        }
    };
</script>
