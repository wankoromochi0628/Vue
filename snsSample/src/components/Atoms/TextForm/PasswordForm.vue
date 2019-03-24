<template>
    <div class="field">
        <div class="control">
            <input class="input is-large" v-model="password" type="password" placeholder="Your Password">
        </div>
    </div>
</template>

<script>
export default {
    name: PasswordForm,
    props: {
        propPassword: {
            type: String,
            description: "パスワード"
        }
    },
    computed: {
        password: {
            get() {
                return this.propPassword;
            },
            set(newPassword) {
                this.$emit('setPassword', newPassword);
            }
        }
    }
}
</script>
