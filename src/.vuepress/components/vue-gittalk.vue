<template>
    <div :id="id"></div>
</template>

<script>
export default {
    name: "VueGittalk",
    data() {
        return {};
    },
    mounted() {},
    methods: {
        createGitTalk() {}
    },
    computed: {
        id() {
            return `git-talk-${this._uid}`;
        }
    }
};
</script>