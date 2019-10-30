<template>
    <div class="box">
        <video controls width="600">
            <source src="/video/flower.webm" type="video/webm">
            <source src="/video/flower.mp4" type="video/mp4">
            Sorry, your browser doesn't support embedded videos.
        </video>
        <div>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                dynamicComponent: null
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>
    .box {}

    .grid-item {}
</style>