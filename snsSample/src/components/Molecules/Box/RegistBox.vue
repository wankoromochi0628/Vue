<template>
    <div>
        <TextForm class="text" :sentence="sentence" @writtenSentence="updateSentence"/>
        <RegistBtn class="btn" @regist='regist' :sentence="sentence" />
    </div>
</template>

<script>
import TextForm from "@/components/Atoms/TextForm/TextForm.vue";
import RegistBtn from "@/components/Atoms/Button/RegistBtn.vue";

export default {
    name: "RegistBox",
    updated: function() {
        // console.log(this.sentence);
    },
    data() {
        return {
            sentence: {
                type: String
            }
        }
    },
    components: {
        TextForm:TextForm,
        RegistBtn:RegistBtn
    },
    methods: {
        regist() {
            console.log(this.sentence);
            this.$emit('regist', this.postWord);
        },
        updateSentence(newSentence) {
            console.log(newSentence);
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
