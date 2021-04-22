## attr()

<a href="www.baidu.com" class="attr">百度</a>

```html
<a href="www.baidu.com" class="attr">百度</a>
```

```css
a.attr:after {
    content: "(" attr(href) ")";
}
```

## var()

<p class="var">这里的字体颜色是红色</p>

```html
<p class="var">这里的字体颜色是红色</p>
```

```css
:root {
    --font-color-red: red; /* 自定义属性必须以--开始 */
}
p.var {
    color: var(--font-color-red);
}
```

## calc()

<div class="calc">
    <div class="calc-inner">宽度为100%-200px</div>
</div>

```html
<div class="calc">
    <div class="calc-inner">宽度为100%-200px</div>
</div>
```

```css
.calc {
    width: 100%;
    border: 1px solid #dedede;
    box-sizing: border-box;
}
.calc-inner {
    width: calc(100% - 200px);
    height: 50px;
    background-color: aqua;
    line-height: 50px;
    text-align: center;
}
```

| 函数   | 描述                                                           | css 版本 |
| ------ | -------------------------------------------------------------- | -------- |
| attr() | 返回选择元素的属性值。                                         | 2        |
| var()  | 用于插入自定义的属性值。                                       | 3        |
| calc() | 允许计算 CSS 的属性值，比如动态计算长度值。                    | 3        |
| rgb()  | 使用红(R)、绿(G)、蓝(B)三个颜色的叠加来生成各式各样的颜色。    | 2        |
| rgba() | 使用红(R)、绿(G)、蓝(B)、透明度(A)的叠加来生成各式各样的颜色。 | 3        |

<style>
:root{
    --font-color-red: red;
}

.attr:after{
    content: "("attr(href)")"
}
p.var{
    color: var(--font-color-red);
}
.calc{
    width: 100%;
    border: 1px solid #dedede;
    box-sizing: border-box;
}
.calc-inner{
    width: calc(100% - 200px);
    height: 50px;
    background-color: aqua;
    line-height: 50px;
    text-align: center;
}
</style>
