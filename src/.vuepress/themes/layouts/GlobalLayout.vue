<template>
    <div id="global-layout" class="global-layout">
        <header class="global-layout-header">
            <ul>
                <li>
                    <a :href="`${base}`">首页</a>
                </li>
                <li v-for="(item, navIndex) in nav" :key="navIndex">
                    <a :href="item.link">{{ item.text }}</a>
                </li>
            </ul>
        </header>
        <div class="global-layout-content">
            <div class="global-layout-body">
                <component :is="layout" />
            </div>
            <div class="global-layout-plugins"></div>
        </div>
        <footer class="global-layout-footer"><h1>Footer</h1></footer>
    </div>
</template>

<script>
import Sidebar from "@theme/global-components/Sidebar.vue";
export default {
    components: {
        Sidebar,
    },
    data() {
        return {
            nav: [],
            base: "/",
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            this.initSidebar();
            this.initNav();
        },
        initSidebar() {
            const page = this.$page;
            const curPath = page.path;
            console.log(this.$site);
        },
        initBase() {
            this.base = this.$site.base;
        },
        initNav() {
            this.nav = this.$themeConfig.nav;
        },
        initTitle() {
            document.title = this.$page.title;
        },
    },
    computed: {
        layout() {
            if (this.$page.path) {
                if (this.$frontmatter.layout) {
                    // 你也可以像默认的 globalLayout 一样首先检测 layout 是否存在
                    return this.$frontmatter.layout;
                }
                return "Layout";
            }
            return "NotFound";
        },
    },
};
</script>

<style lang="scss">
.global-layout {
    width: 1000px;
    padding: 0 20px;
    height: 100vh;
    margin: 0 auto;
    &-header {
    }
    &-content {
        display: flex;
    }

    &-aside {
        flex: 0 0 300px;
    }

    &-wrap {
        flex: auto;
    }
}
</style>
