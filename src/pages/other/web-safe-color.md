<p></p>
<p class="h1">web安全颜色</p>

<div class="colors">
    <template v-for="(item,i) in colors">
        <div class="colors-item" :key="i">
            <div class="colors-item-color" :style="{background: `${item.HTML}`}"></div>
            <div class="colors-item-dec">
                <p>{{ item.HTML }}<span>HEX</span></p>
                <p>{{ item.HTML | hex2rgb }}<span>RGB</span></p>
            </div>
        </div>
    </template>
</div>

<script>
export default {
    data(){
        return {
            colors: [
                {HTML:"#000000"},{HTML:"#000033"},{HTML:"#000066"},{HTML:"#000099"},{HTML:"#0000CC"},{HTML:"#0000FF"},{HTML:"#003300"},
                {HTML:"#003333"},{HTML:"#003366"},{HTML:"#003399"},{HTML:"#0033CC"},{HTML:"#0033FF"},{HTML:"#006600"},{HTML:"#006633"},
                {HTML:"#006666"},{HTML:"#006699"},{HTML:"#0066CC"},{HTML:"#0066FF"},{HTML:"#009900"},{HTML:"#009933"},{HTML:"#009966"},
                {HTML:"#009999"},{HTML:"#0099CC"},{HTML:"#0099FF"},{HTML:"#00CC00"},
                {HTML:"#00CC33"},{HTML:"#00CC66"},{HTML:"#00CC99"},{HTML:"#00CCCC"},{HTML:"#00CCFF"},{HTML:"#00FF00"},{HTML:"#00FF33"},
                {HTML:"#00FF66"},{HTML:"#00FF99"},{HTML:"#00FFCC"},{HTML:"#00FFFF"},{HTML:"#330000"},{HTML:"#330033"},{HTML:"#330066"},
                {HTML:"#330099"},{HTML:"#3300CC"},{HTML:"#3300FF"},{HTML:"#333300"},{HTML:"#333333"},{HTML:"#333366"},{HTML:"#333399"},
                {HTML:"#3333CC"},{HTML:"#3333FF"},{HTML:"#336600"},{HTML:"#336633"},{HTML:"#336666"},{HTML:"#336699"},{HTML:"#3366CC"},
                {HTML:"#3366FF"},{HTML:"#339900"},{HTML:"#339933"},{HTML:"#339966"},{HTML:"#339999"},{HTML:"#3399CC"},{HTML:"#3399FF"},
                {HTML:"#33CC00"},{HTML:"#33CC33"},{HTML:"#33CC66"},{HTML:"#33CC99"},{HTML:"#33CCCC"},{HTML:"#33CCFF"},{HTML:"#33FF00"},
                {HTML:"#33FF33"},{HTML:"#33FF66"},{HTML:"#33FF99"},{HTML:"#33FFCC"},{HTML:"#33FFFF"},{HTML:"#660000"},{HTML:"#660033"},
                {HTML:"#660066"},{HTML:"#660099"},{HTML:"#6600CC"},{HTML:"#6600FF"},{HTML:"#663300"},{HTML:"#663333"},{HTML:"#663366"},
                {HTML:"#663399"},{HTML:"#6633CC"},{HTML:"#6633FF"},{HTML:"#666600"},{HTML:"#666633"},{HTML:"#666666"},{HTML:"#666699"},
                {HTML:"#6666CC"},{HTML:"#6666FF"},{HTML:"#669900"},{HTML:"#669933"},{HTML:"#669966"},{HTML:"#669999"},{HTML:"#6699CC"},
                {HTML:"#6699FF"},{HTML:"#66CC00"},{HTML:"#66CC33"},{HTML:"#66CC66"},{HTML:"#66CC99"},{HTML:"#66CCCC"},{HTML:"#66CCFF"},
                {HTML:"#66FF00"},{HTML:"#66FF33"},{HTML:"#66FF66"},{HTML:"#66FF99"},{HTML:"#66FFCC"},{HTML:"#66FFFF"},{HTML:"#990000"},
                {HTML:"#990033"},{HTML:"#990066"},{HTML:"#990099"},{HTML:"#9900CC"},{HTML:"#9900FF"},{HTML:"#993300"},{HTML:"#993333"},
                {HTML:"#993366"},{HTML:"#993399"},{HTML:"#9933CC"},{HTML:"#9933FF"},{HTML:"#996600"},{HTML:"#996633"},{HTML:"#996666"},
                {HTML:"#996699"},{HTML:"#9966CC"},{HTML:"#9966FF"},{HTML:"#999900"},{HTML:"#999933"},{HTML:"#999966"},{HTML:"#999999"},
                {HTML:"#9999CC"},{HTML:"#9999FF"},{HTML:"#99CC00"},{HTML:"#99CC33"},{HTML:"#99CC66"},{HTML:"#99CC99"},{HTML:"#99CCCC"},
                {HTML:"#99CCFF"},{HTML:"#99FF00"},{HTML:"#99FF33"},{HTML:"#99FF66"},{HTML:"#99FF99"},{HTML:"#99FFCC"},{HTML:"#99FFFF"},
                {HTML:"#CC0000"},{HTML:"#CC0033"},{HTML:"#CC0066"},{HTML:"#CC0099"},{HTML:"#CC00CC"},{HTML:"#CC00FF"},{HTML:"#CC3300"},
                {HTML:"#CC3333"},{HTML:"#CC3366"},{HTML:"#CC3399"},{HTML:"#CC33CC"},{HTML:"#CC33FF"},{HTML:"#CC6600"},{HTML:"#CC6633"},
                {HTML:"#CC6666"},{HTML:"#CC6699"},{HTML:"#CC66CC"},{HTML:"#CC66FF"},{HTML:"#CC9900"},{HTML:"#CC9933"},{HTML:"#CC9966"},
                {HTML:"#CC9999"},{HTML:"#CC99CC"},{HTML:"#CC99FF"},{HTML:"#CCCC00"},{HTML:"#CCCC33"},{HTML:"#CCCC66"},{HTML:"#CCCC99"},
                {HTML:"#CCCCCC"},{HTML:"#CCCCFF"},{HTML:"#CCFF00"},{HTML:"#CCFF33"},{HTML:"#CCFF66"},{HTML:"#CCFF99"},{HTML:"#CCFFCC"},
                {HTML:"#CCFFFF"},{HTML:"#FF0000"},{HTML:"#FF0033"},{HTML:"#FF0066"},{HTML:"#FF0099"},{HTML:"#FF00CC"},{HTML:"#FF00FF"},
                {HTML:"#FF3300"},{HTML:"#FF3333"},{HTML:"#FF3366"},{HTML:"#FF3399"},{HTML:"#FF33CC"},{HTML:"#FF33FF"},{HTML:"#FF6600"},
                {HTML:"#FF6633"},{HTML:"#FF6666"},{HTML:"#FF6699"},{HTML:"#FF66CC"},{HTML:"#FF66FF"},{HTML:"#FF9900"},{HTML:"#FF9933"},
                {HTML:"#FF9966"},{HTML:"#FF9999"},{HTML:"#FF99CC"},{HTML:"#FF99FF"},{HTML:"#FFCC00"},{HTML:"#FFCC33"},{HTML:"#FFCC66"},
                {HTML:"#FFCC99"},{HTML:"#FFCCCC"},{HTML:"#FFCCFF"},{HTML:"#FFFF00"},{HTML:"#FFFF33"},{HTML:"#FFFF66"},{HTML:"#FFFF99"},
                {HTML:"#FFFFCC"},{HTML:"#FFFFFF"}
            ]
        }
    },
    filters: {
        hex2rgb(val){
            const tmp = val.match(/([a-zA-Z\d]{2})/g);
            let target = []
            for(let i of tmp){
                target.push(parseInt(`0x${i}`, 16))
            }
            return target.join()
        }
    }
}
</script>

<style lang="scss" scoped>
.colors{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    &-item{
        flex: 0 0 132px;
        margin-bottom: 20px;
        filter: drop-shadow(2px 2px 2px rgba(0,0,102,.4));
        border-radius: 6px 6px 0 0;
        overflow: hidden;
        &-color{
            width: 100%;
            height: 60px;
        }
        &-dec{
            background: #FAFAFA none repeat scroll 0% 0%;
            padding: 10px;
            & p{
                display: flex;
                justify-content: space-between;
                font-size: 14px;
                line-height: 1.2em;
            }
        }
    }
}
</style>
