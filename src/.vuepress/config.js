const plugins = require("./config/plugins.js");
const sidebar = require("./config/sidebar.js");
const webpackConfig = require("./config/webpack.config.js");

module.exports = {
    base: "/",
    title: "我的工作记录分享",
    extraWatchFiles: [
        "./config/plugins.js", // 使用相对路径
        "./config/sidebar.js", // 使用相对路径
    ],
    plugins: [...plugins],
    themeConfig: {
        smoothScroll: true,
        displayAllHeaders: false,
        nav: [
            { text: "WEB", link: "/web/" },
            { text: "工具", link: "/tools/" },
            { text: "数据结构", link: "/data-structure/" },
            { text: "码云(Gitee)", link: "https://gitee.com/guojikun_admin/web-tricks.git" },
        ],
        sidebar: sidebar,
    },
    configureWebpack: webpackConfig,
};
