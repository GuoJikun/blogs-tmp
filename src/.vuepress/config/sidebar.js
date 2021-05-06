module.exports = {
    "/web/": [
        ["", "须知"],
        {
            title: "HTML", // 必要的
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1, // 可选的, 默认值是 1
            children: [
                ["/web/html/video", "Video"],
                ["/web/html/canvas", "Canvas"],
            ],
        },
        {
            title: "CSS",
            collapsable: false, // 可选的, 默认值是 true,
            children: [
                ["/web/css/grid", "Grid"],
                ["/web/css/cursor", "Cursor"],
                ["/web/css/filter", "Filter滤镜"],
                ["/web/css/loading", "Loading"],
                ["/web/css/function", "css函数"],
                ["/web/css/contain", "contain 属性"],

                ["/web/css/other", "其它"],
            ],
        },
        {
            title: "JS",
            collapsable: false, // 可选的, 默认值是 true,
            children: [
                ["/web/js/decorator", "Decorator"],
                ["/web/js/call-bind-apply", "apply,call,bind，new的原理及实现"],
                ["/web/js/bom", "浏览器对象 BOM"],
                ["/web/js/encode", "encodeURI和encodeURIComponent"],
                ["/web/js/intersectionObserver", "IntersectionObserver"],
                ["/web/js/cookie", "Cookie"],
            ],
        },
        {
            title: "其它",
            children: [
                ["/web/other/libs", "好用的库"],
                ["/web/other/article", "有用的文章"],
                ["/web/other/md", "md语法"],
                ["/web/other/web-safe-color", "web安全颜色"],
            ],
        },
    ],
    "/tools/": [
        ["", "须知"],
        ["/tools/shadow", "阴影生成"],
    ],
    "/data-structure/": [
        ["", "引导"],
        ["list", "List 列表"],
        ["stack", "Stack 栈"],
        ["queue", "Queue 队列"],
        ["binary-search-tree", "二叉搜索树"],
    ],
};
