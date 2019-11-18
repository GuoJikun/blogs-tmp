<template>
    <div class="box">
        <p class="h1">比较好的文章</p>
        <ul>
            <li v-for="(item, i) in articles" :key="i">
                {{ item.name }}，
                <a :href="item.url" target="__blank">传送门</a>
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
                    },
                    {
                        name: "写给前端的Docker实战教程",
                        url: "https://zhuanlan.zhihu.com/p/83309276"
                    },
                    {
                        name: '1024 献礼，10 个前端开发者必收的高赞资源',
                        url: 'https://zhuanlan.zhihu.com/p/88101302'
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
