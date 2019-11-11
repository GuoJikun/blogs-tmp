const plugins = require('./config/plugins.js')
const webpackConfig = require('./config/webpack.config.js')

module.exports = {
    base: '/web-tricks/',
    title: 'web tricks',
    extraWatchFiles: [
        './config/plugins.js', // 使用相对路径
    ],
    plugins: [
        ...plugins


    ],
    themeConfig: {
        smoothScroll: true,
        displayAllHeaders: false,
        nav: [

            { text: '码云(Gitee)', link: 'https://gitee.com/guojikun_admin/web-tricks.git' },
        ],
        sidebar: [
            {
                title: 'HTML',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    ['/pages/html/video', 'Video'],
                ]
            },
            {
                title: 'CSS',
                collapsable: false, // 可选的, 默认值是 true,
                children: [
                    ['/pages/css/grid', 'Grid'],
                    ['/pages/css/cursor', 'Cursor'],
                    ['/pages/css/filter', 'Filter滤镜'],
                    ['/pages/css/loading', 'Loading'],
                    ['/pages/css/function', 'css函数'],

                    ['/pages/css/other', '其它'],
                ]
            },
            {
                title: 'JS',
                collapsable: false, // 可选的, 默认值是 true,
                children: [
                    ['/pages/js/bom', '浏览器对象 BOM'],
                    ['/pages/js/intersectionObserver', 'IntersectionObserver'],
                    ['/pages/js/cookie', 'Cookie']
                ]
            },
            {
                title: '其它',
                children: [
                    ['/pages/other/libs', '好用的库'],
                    ['/pages/other/article', '有用的文章'],
                    ['/pages/other/md', 'md语法'],
                    ['/pages/other/web-safe-color', 'web安全颜色'],
                ]
            },
        ]
    },
    configureWebpack: webpackConfig
}