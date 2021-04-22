<template>
    <div :id="id"></div>
</template>

<script>
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";
export default {
    name: "VueGittalk",
    data() {
        return {
            clientId: "f510b99ce0977fa9d1b1",
            clientSecret: "7fe1d570c1346f8067bd48c819cd0b308b7f4469",
            id: this.$route.name,
        };
    },
    mounted() {
        this.createGitTalk();
    },
    methods: {
        createGitTalk() {
            const gitalk = new Gitalk({
                clientID: this.clientId, //Client ID
                clientSecret: this.clientSecret, //Client Secret
                repo: "blogs", //仓库名称
                owner: "GuoJikun", //仓库拥有者
                admin: ["GuoJikun"],
                id: location.pathname, // Ensure uniqueness and length less than 50
                distractionFreeMode: false, // Facebook-like distraction free mode
            });
            gitalk.render(this.id);
        },
    },
    computed: {},
};
</script>
