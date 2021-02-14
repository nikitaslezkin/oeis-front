<template>
    <div class="SelectBox" :class="{isOpened: optionsVisible}">
        <div class="SelectBox-inner" @click="optionsVisible = !optionsVisible">
            <div class="SelectBox-value s-text-common">{{ selectedTitle }}</div>
            <svg-icon name="dropdown"/>
        </div>
        <div class="SelectBox-options s-text-common">
            <div class="SelectBox-option" v-for="option in visibleOptions" @click="onOptionClick(option.value)">
                {{ option.title }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SelectBox",

        data() {
            return {
                optionsVisible: false
            }
        },

        props: {
            value: String,
            // Array of options
            // option = {
            //  value: String,
            //  title: String
            //  }
            options: {
                type: Array,
                default: () => []
            }
        },

        computed: {
            visibleOptions() {
                return this.options.filter(option => option.value !== this.value);
            },

            selectedTitle() {
                const option = this.options.find(option => option.value === this.value);

                return option && option.title;
            }
        },

        methods: {
            onOptionClick(value) {
                this.optionsVisible = false;
                this.$emit('input', value)
            }
        }
    }
</script>

<style lang="less" scoped>
    .SelectBox {
        position: relative;
        color: @color-black;

        &.isOpened {
            .SelectBox {
                &-inner {
                    svg {
                        transform: rotate(180deg);
                    }
                }

                &-options {
                    opacity: 1;
                    visibility: visible;
                }
            }
        }

        &-inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 1px solid @color-black;
            padding: 7px 10px;
            cursor: pointer;

            svg {
                width: 12px;
                height: 6px;
                margin-left: 5px;
                fill: @color-black;
                transition: transform @animation-duration;
            }
        }

        &-options {
            position: absolute;
            left: 0;
            bottom: 100%;
            width: 100%;
            color: @color-black;
            border: 1px solid @color-black;
            border-bottom: none;
            opacity: 0;
            visibility: hidden;
            z-index: 2;
            transition: opacity, visibility;
            transition-duration: @animation-duration;
        }

        &-option {
            padding: 7px 10px;
            cursor: pointer;

            &:not(:last-child) {
                margin-bottom: 8px;
            }
        }
    }
</style>