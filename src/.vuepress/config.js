const plugins = require('./plugins.js')
module.exports = {
    title: 'web tricks',
    extraWatchFiles: [
        './plugins.js', // 使用相对路径
    ],
    plugins: [
        ...plugins


    ],
    themeConfig: {
        displayAllHeaders: true,
        sidebar: [
            {
                title: 'HTML',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    ['/video', 'Video'],
                ]
            },
            {
                title: 'CSS',
                children: [
                    ['/grid', 'Grid'],
                    ['/cursor', 'Cursor'],
                ]
            },
            {
                title: 'JS',
                children: [
                    ['/intersectionObserver', 'IntersectionObserver']
                ]
            },
            {
                title: '其它',
                children: [
                    ['/libs', '好用的库']
                ]
            },
        ]
    }
}