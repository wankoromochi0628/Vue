<template>
    <div class="submenu column is-3">
        <aside class="box menu">
            <p class="menu-label">
            ユーザー
            </p>
            <ul class="menu-list">
                <li><a href="#">わんころもち<small>@wankoromochi0628</small></a></li>
            </ul>
            <p class="menu-label">
                キーワード
            </p>
            <ul class="menu-list">
                <li><a href="#">目次</a></li>
                <li><a class="is-active" href="#">サンプルプログラム</a>
                    <ul>
                        <li><a href="#1">SNSアプリを実装する</a></li>
                    </ul>
                </li>
            </ul>
        </aside>
    </div>
</template>

<script>

export default {
    name: "Menu",
    computed: {
    }
};
</script>