module.exports = (themeConfig, ctx) => {
    console.log(themeConfig, ctx);
    return {
        // ...
        extend: "@vuepress/theme-default",
    };
};
