<template>
    <div :id="id"></div>
</template>

<script>
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";
export default {
    name: "VueGittalk",
    data() {
        const clientId = "f510b99ce0977fa9d1b1";
        const clientSecret = "7fe1d570c1346f8067bd48c819cd0b308b7f4469";
        return {};
    },
    mounted() {
        this.createGitTalk();
    },
    methods: {
        createGitTalk() {
            const gitalk = new Gitalk({
                clientID: clientId, //Client ID
                clientSecret: clientSecret, //Client Secret
                repo: "web-tricks", //仓库名称
                owner: "jikunguo", //仓库拥有者
                admin: ["jikunguo"],
                id: location.href, // Ensure uniqueness and length less than 50
                distractionFreeMode: false // Facebook-like distraction free mode
            });
            gitalk.render(this.id);
        }
    },
    computed: {
        id() {
            return `git-talk-${this._uid}`;
        }
    }
};
</script>
