
<template>
    <div class="grid">
        <div class="grid-item grid-item-1">1</div>
        <div class="grid-item grid-item-2">2</div>
        <div class="grid-item grid-item-3">3</div>
        <div class="grid-item grid-item-4">4</div>
        <div class="grid-item grid-item-5">5</div>
        <div class="grid-item grid-item-6">6</div>
        <div class="grid-item grid-item-7">7</div>
        <div class="grid-item grid-item-8">8</div>
        <div class="grid-item grid-item-9">9</div>
    </div>
</template>

```
// html
<div class="grid">
    <div class="grid-item grid-item-1">1</div>
    <div class="grid-item grid-item-2">2</div>
    <div class="grid-item grid-item-3">3</div>
    <div class="grid-item grid-item-4">4</div>
    <div class="grid-item grid-item-5">5</div>
    <div class="grid-item grid-item-6">6</div>
    <div class="grid-item grid-item-7">7</div>
    <div class="grid-item grid-item-8">8</div>
    <div class="grid-item grid-item-9">9</div>
</div>

// css
.grid{
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
    justify-content: center;
    align-items: center;
    grid-auto-flow: row;
}
.grid-item{
    text-align: center;
    font-size: 1.4em;
    line-height: 100px;
    border: 1px solid #fff;
    box-sizing: border-box;
}
```

<script>
export default {
    data() {
        return {
            dynamicComponent: null
        }
    },
    mounted () {
        
    }
}
</script>

<style scoped>
    .grid{
        display: grid;
        grid-template-columns: repeat(3, 100px);
        grid-template-rows: repeat(3, 100px);
        justify-content: center;
        align-items: center;
        grid-auto-flow: row;
    }
    .grid-item{
        text-align: center;
        font-size: 1.4em;
        line-height: 100px;
        border: 1px solid #fff;
        box-sizing: border-box;
    }
    
    .grid-item-1 {
        background-color: #ef342a;
    }

    .grid-item-2 {
        background-color: #f68f26;
    }

    .grid-item-3 {
        background-color: #4ba946;
    }

    .grid-item-4 {
        background-color: #0376c2;
    }

    .grid-item-5 {
        background-color: #c077af;
    }

    .grid-item-6 {
        background-color: #f8d29d;
    }

    .grid-item-7 {
        background-color: #b5a87f;
    }

    .grid-item-8 {
        background-color: #d0e4a9;
    }

    .grid-item-9 {
        background-color: #4dc7ec;
    }
</style>