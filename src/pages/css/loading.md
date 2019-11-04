<div class="loading">
    <div class="loading-item">
        <p class="h2">效果1</p>
        <div class="loading-item-content">
            <div class="bouncing-loader">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
</div>

```html
<div class="bouncing-loader">
    <div></div>
    <div></div>
    <div></div>
</div>
```

```scss
@keyframes bouncing-loader {
    to {
        opacity: 0.1;
        transform: translate3d(0, -1rem, 0);
    }
}
.bouncing-loader {
    display: flex;
    justify-content: center;
    & > div {
        width: 1rem;
        height: 1rem;
        margin: 3rem 0.2rem;
        background: #8385aa;
        border-radius: 50%;
        animation: bouncing-loader 0.6s infinite alternate;
        &:nth-child(2) {
            animation-delay: 0.2s;
        }
        &:nth-child(3) {
            animation-delay: 0.4s;
        }
    }
}
```

<div class="loading">
    <div class="loading-item">
        <p class="h2">效果2</p>
        <div class="loading-item-content">
            <div class="donut"></div>
        </div>
    </div>
</div>

```html
<div class="donut"></div>
```

```scss
.donut {
    display: inline-block;
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: #7983ff;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: donut-spin 1.2s linear infinite;
}
```

<style scoped lang="scss">
.loading{
    &-item{
        padding: 10px 0;
        &+&{
            margin-top: 20px;
        }
        &-content{
            padding: 20px 0;
            display: flex;
            justify-content: center;
            background-color: #efefef;
        }
    }
}
@keyframes bouncing-loader {
    to {
        opacity: 0.1;
        transform: translate3d(0, -1rem, 0);
    }
}
.bouncing-loader {
    display: flex;
    justify-content: center;
    &>div{
        width: 1rem;
        height: 1rem;
        margin: 3rem 0.2rem;
        background: #8385aa;
        border-radius: 50%;
        animation: bouncing-loader 0.6s infinite alternate;
        &:nth-child(2) {
            animation-delay: 0.2s;
        }
        &:nth-child(3) {
            animation-delay: 0.4s;
        }
    }
}
@keyframes donut-spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
.donut {
    display: inline-block;
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: #7983ff;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: donut-spin 1.2s linear infinite;
}


</style>
