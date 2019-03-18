<template>
    <section class="is-fullheight">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <h3 class="title has-text-grey">Login</h3>
                    <p class="subtitle has-text-grey">Please login to proceed.</p>
                    <div class="box">
                        <figure class="avatar">
                            <img src="../assets/logo.png">
                        </figure>
                        <form>
                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" v-model="loginId" type="text" placeholder="Your LoginID" autofocus="">
                                </div>
                            </div>

                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" v-model="password" type="password" placeholder="Your Password">
                                </div>
                            </div>
                            <LoginBtn @login="login"/>
                        </form>
                    </div>
                    <p class="has-text-grey">
                        <a href="../">Sign Up</a> &nbsp;·&nbsp;
                        <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                        <a href="../">Need Help?</a>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import LoginBtn from "@/components/Atoms/Button/LoginBtn.vue";

export default {
    components: {
        LoginBtn
    },
    data() {
        return {
            loginId: "",
            password: ""
        }
    },
    method: {
        login() {
        // axios を require してインスタンスを生成する
        const axiosBase = require('axios');
        const axios = axiosBase.create({
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            },
            responseType: 'json'
        });

        const {data} = axios.get("http://localhost:3000/account/");

        console.log("到達");
        console.log(data);
        }
    }
}
</script>