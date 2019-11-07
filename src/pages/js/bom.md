## 获取 url 中的参数

```
function query(url) {
    return url.match(/([^?=&]+)(=([^&]*))/g).reduce(
        (obj, v) => {
            const tmp = v.split('=')
            obj[tmp[0]] = tmp[1]
            return obj
        }, {}
    )
}
```
