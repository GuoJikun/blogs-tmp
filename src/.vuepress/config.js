const plugins = require("./config/plugins.js");
const sidebar = require("./config/sidebar.js");
const webpackConfig = require("./config/webpack.config.js");

module.exports = {
    base: "/",
    title: "我的博客",
    extraWatchFiles: [
        ".vuepress/config/plugins.js", // 使用相对路径
        ".vuepress/config/sidebar.js", // 使用相对路径
    ],
    plugins: [...plugins],
    themeConfig: {
        smoothScroll: true,
        displayAllHeaders: false,
        nav: [
            { text: "WEB", link: "/web/" },
            { text: "工具", link: "/tools/" },
            { text: "数据结构", link: "/data-structure/" },
            { text: "GITHUB", link: "https://github.com/GuoJikun/blogs" },
        ],
        sidebar: sidebar,
    },
    configureWebpack: webpackConfig,
};
