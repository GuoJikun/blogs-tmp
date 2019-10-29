module.exports = [
    [
        'vuepress-plugin-container',
        {
            type: 'right',
            defaultTitle: '',
        },
    ],
    [
        'vuepress-plugin-container',
        {
            type: 'info',
            before: info => `<div class="info" style="background-color: #E4E7ED;color: #909399;border-left: 10px solid #999;padding: 10px 20px;"><p class="title">${info}</p>`,
            after: '</div>',
            defaultTitle: {
                '/': 'info',
                '/zh/': '提示'
            }
        },
    ],
]