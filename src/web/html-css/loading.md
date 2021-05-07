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

<div class="loading">
    <div class="loading-item">
        <p class="h2">效果3:太极图</p>
        <div class="loading-item-content">
           <div id="loader">
                <div class="logo">
                    <div class="left"></div>
                    <div class="right"></div>
                </div> 
                <p>Loading...</p>
            </div>
        </div>
    </div>
</div>

<div class="loading">
    <div class="loading-item">
        <p class="h2">效果4:太极图2</p>
        <div class="loading-item-content">
            <div class="tai-chi">
                <div class="tai-chi-left"></div>
                <div class="tai-chi-right"></div>
            </div>
        </div>
    </div>
</div>

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
            position: relative;
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
$border-width:2px;
$loader-width:150px;
$loader-insider-width: $loader-width * 0.15;
$animate-time:4s;
@keyframes cricle-loading {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

#loader{
    /* position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0; */
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
    
    p {
        padding: 1.5em;
        font-family: Arial;
    }

    .logo{
        width: $loader-width;
        height: $loader-width;
        position: relative;
        background-color: #fff;
        border-radius: 50%;
        animation: cricle-loading 2.4s linear infinite;
        &:before{
            position: absolute;
            content: '';
            left: 0;
            top: 0;
            border-color: transparent;
            border-width: $border-width;
            border-style: solid;
            border-top-color: #000;
            border-right-color: #000;
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }

        &:after{
            position: absolute;
            content: '';
            bottom: -2 * $border-width;
            right: -2 * $border-width;
            border-color: transparent;
            border-width: $border-width;
            border-style: solid;
            border-bottom-color: #000;
            border-left-color: #000;
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }

        .left{
            position: absolute;
            width: 50%;
            height: 100%;
            top: $border-width;
            right: 50%;
            background-color: #000;
            border-top-left-radius: 100% 50%;
            border-bottom-left-radius: 100% 50%;

            &:before{
                position: absolute;
                content: '';
                width: 100%;
                height: 50%;
                bottom: 0;
                left: 50%;
                border-radius: 50%;
                background-color: #000;
            }

            &:after{
                position: absolute;
                content: '';
                width: $loader-insider-width;
                height: $loader-insider-width;
                background-color: #fff;
                bottom: calc(25% - #{$loader-insider-width} / 2);
                left: calc(100% - #{$loader-insider-width} / 2);
                border-radius: 50%;
            }      
        }

        .right{
            position: absolute;
            width: 50%;
            height: 100%;
            top: $border-width;
            left: 50%;
            border-top-right-radius: 100% 50%;
            border-bottom-right-radius: 100% 50%;

            &:before{
                position: absolute;
                content: '';
                width: 100%;
                height: 50%;
                top: 0;
                right: 50%;
                border-radius: 50%;
                background-color: #fff;
            }

            &:after{
                position: absolute;
                content: '';
                width: $loader-insider-width;
                height: $loader-insider-width;
                background-color: #000;
                top: calc(25% - #{$loader-insider-width} / 2);
                right: calc(100% - #{$loader-insider-width} / 2);
                border-radius: 50%;
            }    
        }  
    }  
}
.tai-chi{
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid #000;
    &:before,
    &:after{
        content: '';
        display: block;
        width: 50%;
        height: 100%;
        position: absolute;
        top: 0;
    }
    &:before{
        left: 0px;
        background-color: #000;
    }
    &:after{
        right: 0;
        background-color: #fff;
    }

    &-left,
    &-right{
        position: absolute;
        top: 1px;
    }

    &-left{

        &:before,
        &:after{
            position: absolute;
            width: 100%;
        }
    }
}
</style>
