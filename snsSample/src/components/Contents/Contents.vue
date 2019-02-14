<template>
    <div class="column">
        <TextForm class="text"/>
        <RegistBtn class="btn" @regist="regist" />
        <article class="box media">
            <figure class="media-left">
                <p class="image is-64x64">
                    <img src="../../assets/logo.png">
                </p>
            </figure>
            <div class="media-content">
                <div class="content" id="1">
                    <p><strong>ストレージを変更する</strong><br>
                        元画面にてストレージを変更し、当画面でストレージの変更を検知させる。<br><br>
                        <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                    </p>
                </div>
            </div>
        </article>
    </div>
</template>

<script>
    import TextForm from "@/components/TextForm/TextForm.vue";
    import RegistBtn from "@/components/Button/RegistBtn.vue";

    export default {
        name: "Contents",
        components:{
            TextForm:TextForm,
            RegistBtn:RegistBtn
        },
        method: {
            regist() {
                
            }
        }
    };
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
