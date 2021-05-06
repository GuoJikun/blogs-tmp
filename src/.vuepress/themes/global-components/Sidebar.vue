<template>
    <div>
        <ul>
            <template v-for="(item, _index) in menus">
                <li :key="_index">
                    <div>{{ item }}</div>
                    <!-- <div v-if="typeof _index === 'number">
                        <ul>
                            <li></li>
                        </ul>
                    </div> -->
                </li>
            </template>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Sidebar",
    props: {
        dataSource: [Array, Object],
    },

    methods: {
        init() {},
        initByArray() {},
    },

    computed: {
        menus() {
            return this.dataSource || [];
        },
    },
};
</script>
