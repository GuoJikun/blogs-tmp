<div class="libs">
    <div class="libs-group" v-for="(item,i) in libs" :key="i">
        <p class="libs-group-title">{{ item.name }}</p>
        <ul class="libs-list ul">
            <li v-for="(lib, $i) in item.list" :key="$i" class="libs-list-item">
                <div>
                    <p>{{ lib.name }}</p>
                    <p class="libs-list-item-dec">{{ lib.dec }}</p>
                </div>
                <div>
                    <a :href="lib.url" target="__black">传送门</a>
                </div>
            </li>
        </ul>
    </div>
</div>

<script>
    export default {
        data() {
            return {
                libs: [
                    {
                        name: 'UI库',
                        list: [
                            {
                                name: "element-ui",
                                url: "https://element.eleme.cn/#/zh-CN/component/installation"
                            },
                            {
                                name: "view-design(iview)",
                                url: "https://www.iviewui.com/docs/guide/install"
                            },
                            {
                                name: "Ant Design(vue)",
                                url: "https://www.antdv.com/docs/vue/getting-started-cn/"
                            },
                            {
                                name: "vant",
                                dec: '轻量、可靠的移动端 Vue 组件库',
                                url: "https://youzan.github.io/vant/#/zh-CN/intro"
                            }
                        ]
                    },
                    {
                        name: 'JS库',
                        list: [
                            {
                                name: "dayjs",
                                dec: '时间格式化',
                                url: "https://github.com/iamkun/dayjs/blob/dev/docs/zh-cn/README.zh-CN.md"
                            },
                            {
                                name: "moment",
                                dec: '时间格式化',
                                url: "http://momentjs.cn/"
                            },
                            {
                                name: "v-click-outside-x",
                                dec: 'vue指令-在某元素外点击',
                                url: "https://github.com/Xotic750/v-click-outside-x"
                            },
                            {
                                name: "lodash",
                                dec: 'Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库',
                                url: "https://lodash.com/"
                            },
                            {
                                name: "decimal.js",
                                dec: 'decimal.js 一个js计算库，可以不丢失精度',
                                url: "http://mikemcl.github.io/decimal.js/"
                            }
                        ]
                    },
                    {
                        name: '单一组件',
                        list: [
                            {
                                name: 'vue-virtual-scroller',
                                dec: '虚拟滚动,大数据',
                                url: 'https://github.com/Akryum/vue-virtual-scroller'
                            }
                        ]
                    }
                ]
            }
        },
        mounted() {


        },
        methods: {

        }

    }
</script>

<style scoped lang="scss">
    .libs {
        
        &-group{
            font-size: 16px;
            margin-top: 20px;
            color: #000000;
        }
        &-list{
            padding: 0 20px 10px;
            &-item{
                font-size: 14px;
                padding: 10px 0;
                border-bottom: 1px solid #dfdfdf;
                display: flex;
                justify-content: space-between;
                align-items: center;
                &-title{
                    font-size: 15px;
                }
                &-dec{
                    font-size: 12px;
                    color: #999;
                }
            }
        }
        
    }
</style>
