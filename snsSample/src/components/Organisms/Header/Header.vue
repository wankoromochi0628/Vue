<template>
    <div class="hero is-primary is-bold">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">タイトル</h1>
                <h2 class="subtitle">サブタイトル</h2>
                <h2 class="subtitle">鈴木</h2>
            </div>
        </div>
    </div>
</template>

<script>
import {mapMutations, mapActions} from 'vuex';
import {mapState} from 'vuex';
import {store} from 'vuex';

export default {
    name: "Header",
    async created() {
        this.getHead();
    },
    data() {
    },
    methods: {
        getHead() {
            this.$store.mapActions('getHeaderInfo');
        }
    },
    computed: {
    }
};
</script>
