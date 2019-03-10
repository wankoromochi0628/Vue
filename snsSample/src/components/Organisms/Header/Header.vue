<template>
    <div class="hero is-primary is-bold">
        <div class="hero-body">
            <div class="container">
                <!-- <h1 class="title">{{title}}</h1>
                <h2 class="subtitle">{{subTitle}}</h2>
                <h2 class="subtitle">{{author}}</h2> -->
                <h1 class="title">タイトル</h1>
                <h2 class="subtitle">サブタイトル</h2>
                <h2 class="subtitle">鈴木</h2>
                <br>{{count}}
                <button @click='increment'>+</button>
                <button @click='decrement'>-</button>
            </div>
        </div>
    </div>
</template>

<script>
import {mapMutations, mapActions} from 'vuex';
import {mapState} from 'vuex';
import {store} from 'vuex';
import index from ''

export default {
    name: "Header",
    async created() {
    },
    data() {
        return {
            count : 0
        }
    },
    methods: {
        ...mapMutations('increment'),
        ...mapMutations('decrement')
    },
    computed: {
        ...mapState(['count']),
    }
};
</script>
