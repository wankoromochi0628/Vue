<template>
    <div class="submenu column is-3">
        <aside class="box menu">
            <p class="menu-label">
            ユーザー
            </p>
            <ul class="menu-list">
                <li><a href="#"><small>{{menuUser}}</small></a></li>
            </ul>
            <p class="menu-label　has-background-success">
                メニュー
            </p>
            <ul class="menu-list">
                <ul>
                    <li><a href="">SNSアプリを実装する</a></li>
                </ul>
            </ul>
        </aside>
    </div>
</template>

<script>

export default {
    name: "Menu",
    created: function() {
        let mail = firebase.auth().currentUser.email;
        var pos = mail.indexOf("@");

        console.log(pos);
        if (pos < 0) {
            this.menuUser = "@" + mail;
            console.log("文字列整形失敗" + this.menuUser);
        } else {
            this.menuUser = "@" + mail.substring(0, pos);
            console.log("文字列整形成功" + this.menuUser);
        }
    },
    data () {
        return {
            menuUser: {
                type: String
            }
        }
    },
    computed: {
    }
};
</script>