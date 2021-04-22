<template>
    <div class="box">
        <video controls width="600" ref="videos" @canplaythrough="getduration" @timeupdate="getProgress">
            <source :src="$withBase('/video/flower.webm')" type="video/webm">
            <source :src="$withBase('/video/flower.mp4')" type="video/mp4">
            Sorry, your browser doesn't support embedded videos.
        </video>
        <div>
            <el-progress :percentage="progress/duration*100" :show-text="false" style="width: 600px;"></el-progress>
            <progress :value="progress" :max="duration" style="width: 600px;"></progress>
            <div style="padding: 20px 0;">
                <vue-button @click="play">开始</vue-button>
                <vue-button @click="pause">暂停</vue-button>
                <vue-button @click="volumePlus">音量+</vue-button>
                <vue-button @click="volumeMinus">音量－</vue-button>
                <vue-button>快进</vue-button>
                <vue-button>快退</vue-button>
                <el-select v-model="s" @change="tabs">
                    <el-option value="0.5" label="0.5倍速"></el-option>
                    <el-option value="1" label="1倍速"></el-option>
                    <el-option value="1.5" label="1.5倍速"></el-option>
                    <el-option value="2" label="2倍速"></el-option>
                </el-select>
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        data() {
            return {
                videos: null,
                progress: 0,
                duration: 100,
                s: '1'
            }
        },
        mounted() {
            

        },
        methods: {
            getduration(ev) {
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
                    this.$message.warning('已经是最大音量了')
                }
            },
            volumeMinus(){
                if(this.$refs.videos.volume > 0){
                    this.$refs.videos.volume = (this.$refs.videos.volume - 0.1).toFixed(1)
                }else{
                    this.$message.warning('已经是最小音量了')
                }
            },
            getProgress(ev){
                this.progress = ev.target.currentTime
            },
            tabs(val){
                console.log(this.$refs.videos.playbackRate)
                this.$refs.videos.playbackRate = val;
                console.log(this.$refs.videos.playbackRate)
            }
        },
    }
</script>

<style scoped>
    .box {}

    .grid-item {}
</style>
