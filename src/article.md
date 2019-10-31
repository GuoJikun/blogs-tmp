<template>
    <div class="box">
        <h1>比较好的文章</h1>
        <ul>
            <li v-for="(item, i) in articles" :key="i">
                <a :href="item.url" target="__blank"></a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                articles: [
                    {
                        name: "前端开发者手册2019",
                        url: "https://www.yuque.com/ysfe/ykx/fedhb"
                    }
                ]
            };
        },
        mounted() {},
        methods: {}
    };
</script>

<style scoped>
    .box {
    }

    .grid-item {
    }
</style>
