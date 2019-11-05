<template>
    <button
        :class="['vue-button', `vue-button-${size}`, typeClass, {'is-disabled': disabled}]"
        @click="click"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "VueButton",
    props: {
        size: {
            type: String,
            default: "default",
            validator(val) {
                return ["small", "medium", "large", "default"].includes(val);
            }
        },
        type: {
            type: String,
            validator(val) {
                return ["primary", "warning", "danger", "info"].includes(val);
            }
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        click(ev) {
            this.$emit("click", ev);
        }
    },
    computed: {
        typeClass() {
            if (this.type) {
                return `vue-button-${this.type}`;
            } else {
                return "";
            }
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../styles/variable.scss";

.vue-button {
    line-height: 30px;
    padding: 0 20px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    background-color: #fff;
    cursor: pointer;
    font-size: 12px;
    border-radius: 4px;
    outline: none;

    &:active {
        color: #3a8ee6;
        border-color: #3a8ee6;
        outline: none;
    }

    &:hover,
    &:focus {
        color: #409eff;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
    }

    .is-disabled,
    .is-disabled:focus,
    .is-disabled:hover {
        color: #c0c4cc;
        cursor: not-allowed;
        background-image: none;
        background-color: #fff;
        border-color: #ebeef5;
    }

    & + & {
        margin-left: 20px;
    }

    &-small,
    &-default {
        line-height: 30px;
        padding: 0 20px;
        font-size: 12px;
    }

    &-medium {
        line-height: 34px;
        padding: 0 30px;
        font-size: 14px;
    }

    &-large {
        line-height: 38px;
        padding: 0 30px;
        font-size: 14px;
    }

    &-primary {
        color: $vue-white;
        background-color: #409eff;
        border-color: #409eff;
        &:active {
            background: #3a8ee6;
            border-color: #3a8ee6;
            color: #fff;
            outline: none;
        }

        &:hover,
        &:focus {
            background: #66b1ff;
            border-color: #66b1ff;
            color: #fff;
        }
    }
}
</style>