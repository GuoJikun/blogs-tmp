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
        sidebar: [
            '/page-a',
            ['/page-b', 'Explicit link text']
        ]
    }
}