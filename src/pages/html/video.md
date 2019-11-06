<template>
    <div class="box">
        <video controls width="600" ref="videos" @canplaythrough="getduration" @timeupdate="getProgress">
            <source :src="$withBase('/video/flower.webm')" type="video/webm">
            <source :src="$withBase('/video/flower.mp4')" type="video/mp4">
            Sorry, your browser doesn't support embedded videos.
        </video>
        <div>
            <progress :value="progress" :max="duration" style="width: 600px;"></progress>
            <div style="padding: 20px 0;">
                <vue-button @click="play">开始</vue-button>
                <vue-button @click="pause">暂停</vue-button>
                <vue-button @click="volumePlus">音量+</vue-button>
                <vue-button @click="volumeMinus">音量－</vue-button>
                <vue-button>快进</vue-button>
                <vue-button>快退</vue-button>
                <select class="select">
                    <option value="0.5">0.5倍速</option>
                    <option value="1">1倍速</option>
                    <option value="1.5">1.5倍速</option>
                    <option value="2">2倍速</option>
                </select>
            </div>
        </div>
    </div>
    <div>
        <vue-gittalk></vue-gittalk>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                videos: null,
                progress: 0,
                duration: 100,
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.videos = this.$refs.videos;

                // console.log(this,'123')
            })

        },
        methods: {
            getduration(ev) {
                // console.log(ev.target.duration)
                this.duration = ev.target.duration
            },
            play(){
                this.$refs.videos.play()
            },
            pause(){
                this.$refs.videos.pause()
            },
            volumePlus(){
                if(this.$refs.videos.volume < 1){
                    this.$refs.videos.volume = (this.$refs.videos.volume + 0.1).toFixed(1)
                }else{
                    alert('已经是最大音量了')
                }
                console.log(this.$refs.videos.volume)
            },
            volumeMinus(){
                if(this.$refs.videos.volume > 0){
                    this.$refs.videos.volume = (this.$refs.videos.volume - 0.1).toFixed(1)
                }else{
                    alert('已经是最小音量了')
                }
                
                console.log(this.$refs.videos.volume)
            },
            getProgress(ev){
                console.log(ev.target.currentTime)
                this.progress = ev.target.currentTime
            }
        },
    }
</script>

<style scoped>
    .box {}

    .grid-item {}
</style>
