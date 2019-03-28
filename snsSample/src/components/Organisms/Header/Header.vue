<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://jp.vuejs.org/index.html" target="_blank">
        <img src="../../../assets/logo.png" >
        <h3><strong>Vue Samples</strong></h3>
      </a>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          {{user}}
        </a>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button" href="https://github.com/wankoromochi0628/Vue" target="_blank">
            <span class="icon">
              <i class="fab fa-github"></i>
            </span>
            <span>GitHub</span>
          </a>
          <a class="button is-info" @click="signOut">
            <strong>ログアウト</strong>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  created: function() {
      let mail = firebase.auth().currentUser.email;
      var pos = mail.indexOf("@");

      console.log(pos);
      if (pos < 0) {
          this.user = "@" + mail;
          console.log("文字列整形失敗" + this.user);
      } else {
          this.user = "@" + mail.substring(0, pos);
          console.log("文字列整形成功" + this.user);
      }
  },
  data () {
    return {
      user: {
        type: String
      }
    }
  },
  props: {
    msg: String
  },
  methods: {
    signOut: function () {
      firebase.auth().signOut().then(() => {
        this.$router.push('/signin')
      })
    }
  }
}
</script>
