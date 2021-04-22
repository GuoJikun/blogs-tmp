## 首行缩进

-   <p style="text-indent: 2em;">这是块级别元素的首行缩进</p>

```css
p.block {
    text-indent: 2em;
}
```

-   <p style="margin-left: 2em;display: inline;width:  200px;">这是行内元素的首行缩进</p>

```css
p.inline {
    display: inline;
    width: 200px;
    margin-left: 2em;
}
```

## 使文字无法被选取

-   <p style="user-select: none;">这里的文字无法被选取</p>

```css
p.not-select {
    user-select: none;
}
```

## 自定义滚动条

<div class="scroll-custom">
    <div class="scroll-custom-inner">
        <div style="height: 100px;background: pink;"></div>
        <div style="height: 100px;background: blue;"></div>
        <div style="height: 100px;background: aqua;"></div>
        <div style="height: 100px;background: red;"></div>
        <div style="height: 100px;background: pink;"></div>
    </div>
</div>

```html
<div class="scroll-custom">
    <div class="scroll-custom-inner">
        <div style="height: 100px;background: pink;"></div>
        <div style="height: 100px;background: blue;"></div>
        <div style="height: 100px;background: aqua;"></div>
        <div style="height: 100px;background: red;"></div>
        <div style="height: 100px;background: pink;"></div>
    </div>
</div>
```

```scss
.scroll-custom {
    height: 100px;
    overflow: auto;
    &::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }
    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.2);
        border-radius: 1px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 1px;
        box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.2);
    }
    &-inner {
        height: 500px;
        width: 500%;
    }
}
```

## 超出宽度显示...

<p class="ellipsis">这里的文字超出宽度会显示省略号发士大夫撒发的</p>

```css
.ellipsis {
    width: 253px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
```

<style scoped lang="scss">
.scroll-custom{
    height: 100px;
    overflow: auto;
    &::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }
    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.2);
        border-radius: 1px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 1px;
        box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.2);
    }
    &-inner{
        height: 500px;
        width: 500%;
    }
}
.ellipsis{
    width: 253px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
