const plugins = require('./plugins.js')
const webpackConfig = require('./webpack.config.js')

module.exports = {
    base: '/web-tricks/',
    title: 'web tricks',
    extraWatchFiles: [
        './plugins.js', // 使用相对路径
    ],
    plugins: [
        ...plugins


    ],
    themeConfig: {
        smoothScroll: true,
        displayAllHeaders: true,
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
                children: [
                    ['/pages/css/grid', 'Grid'],
                    ['/pages/css/cursor', 'Cursor'],
                    ['/pages/css/filter', 'Filter滤镜'],
                    ['/pages/css/loading', 'Loading'],

                    ['/pages/css/other', '其它'],
                ]
            },
            {
                title: 'JS',
                children: [
                    ['/pages/js/intersectionObserver', 'IntersectionObserver']
                ]
            },
            {
                title: '其它',
                children: [
                    ['/pages/other/libs', '好用的库'],
                    ['/pages/other/article', '有用的文章'],
                    ['/pages/other/webgl', 'Webgl'],
                ]
            },
        ]
    },
    configureWebpack: webpackConfig
}