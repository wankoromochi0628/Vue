<template>
    <div class="field">
        <div class="control">
            <input type="text" placeholder="Username" v-model="username">
        </div>
    </div>
</template>

<script>
export default {
    name: MailForm,
    props: {
        propLoginId: {
            type: String,
            description: "ログインID"
        }
    },
    computed: {
        loginId: {
            get() {
                return this.propLoginId;
            },
            set(newLoginId) {
                this.$emit('setLoginId', newLoginId);
            }
        }
    }
}
</script>
