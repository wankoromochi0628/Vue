<template>
    <div class="signin">
        <figure class="avatar">
            <img src="../assets/logo.png">
        </figure>
        <h2>Sign in</h2>
        <input type="text" placeholder="Username" v-model="username">
        <input type="password" placeholder="Password" v-model="password">
        <button class="button is-success" @click="signIn" id="loginBtn">サインイン</button>
        <p>アカウントはお持ちですか?<br>
            <router-link to="/signup">今すぐアカウントを作成してみましょう!!</router-link>
        </p>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'Signin',
    data: function () {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        signIn: function () {
            document.getElementById('loginBtn').classList.add('is-loading');

            firebase.auth().signInWithEmailAndPassword(this.username, this.password).then(
            user => {
                this.$router.push('/')
            },
            err => {
                document.getElementById('loginBtn').classList.remove('is-loading');
                console.log(err.message);
                alert("メールアドレスまたはパスワードが間違っています。")
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
.signin {
    margin-top: 20px;

    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center
}
input {
    margin: 10px 0;
    padding: 10px;
}
</style>