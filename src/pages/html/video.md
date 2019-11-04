<template>
    <div class="box">
        <video controls width="600" ref="videos" @canplaythrough="getduration">
            <source src="/video/flower.webm" type="video/webm">
            <source src="/video/flower.mp4" type="video/mp4">
            Sorry, your browser doesn't support embedded videos.
        </video>
        <div>
            <progress value="22" max="100" style="width: 600px;"></progress>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                videos: null,
                progress: 0
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.videos = this.$refs.videos;


            })

        },
        methods: {
            getduration(ev) {
                console.log(ev.target.duration)
            }
        }

    }
</script>

<style scoped>
    .box {}

    .grid-item {}
</style>