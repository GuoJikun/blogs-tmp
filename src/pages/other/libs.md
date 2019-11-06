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

<div>
    <vue-gittalk></vue-gittalk>
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
                                name: "Ant Design(vue)",
                                url: "https://www.antdv.com/docs/vue/getting-started-cn/"
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
