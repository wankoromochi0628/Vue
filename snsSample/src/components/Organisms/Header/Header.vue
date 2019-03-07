<template>
    <div class="hero is-primary is-bold">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">Vue SNS</h1>
                <h2 class="subtitle">下期課題</h2>
                <h2 class="subtitle">@wankoromochi0628</h2>
                <p><strong>{{count}}</strong></p>
                <input type="button" value="1を足す" class="is-link is-outlined" @click="countUp()"/>
            </div>
        </div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex';
import {mapState} from 'vuex';

export default {
    name: "Header",
    created: {
        ...mapMutations(['getHeader'])
    },
    data() {
        return {
            count: 0,
            title: "",
            subTitle: "",
            author: ""
        }
    },
    methods: {
        ...mapMutations(['countUp'])
    },
    computed: {
        ...mapState(['count']),
        ...mapState(['title']),
        ...mapState(['subTitle']),
        ...mapState(['author'])
    }
};
</script>
