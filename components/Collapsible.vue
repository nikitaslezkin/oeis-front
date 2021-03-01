<template>
    <div class="Collapsible" :class="{isOpened: opened}">
        <div class="Collapsible-title" :class="titleClass" @click="opened = !opened">{{title}}</div>
        <div class="Collapsible-content" v-html="content"/>
    </div>
</template>

<script>
    export default {
        name: "Collapsible",

        props: {
            title: {
                type: String,
                default: ''
            },
            titleClass: {
                type: String,
                default: 's-text-subtitle'
            },
            content: {
                type: String,
                default: ''
            }
        },

        data() {
            return {
                opened: false
            }
        }
    }
</script>

<style scoped lang="less">
    .Collapsible {
        &.isOpened {
            .Collapsible {
                &-title:after {
                    transform: rotate(180deg);
                }

                &-content {
                    display: block;
                }
            }
        }

        &-title {
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;

            &:after {
                content: '';
                background: url('~assets/sprite/svg/dropdown.svg');
                width: 12px;
                height: 6px;
                background-size: 100% 100%;
            }

            &:before {
                content: '';
                position: absolute;
                left: -10px;
                top: -5px;
                right: -10px;
                bottom: -5px;
                background: fade(@color-gray, 15);
                opacity: 0;
                transition: opacity @animation-duration;
            }

            &:hover:before {
                opacity: 1;
            }
        }

        &-content {
            display: none;
        }
    }
</style>