<template>
    <header class="Header">
        <div class="Header-inner s-text-caption">
            <router-link class="Header-item" :to="{name: 'index'}">About</router-link>
            <router-link class="Header-item Header-item--search" :to="{name: 'circuits'}">Circuits</router-link>
            <router-link class="Header-item Header-item--search" :to="{name: 'papers'}">Papers</router-link>
            <router-link class="Header-item Header-item--search" :to="{name: 'solver'}">Solver</router-link>
        </div>
    </header>
</template>

<script>
    export default {
        name: "HeaderView"
    }
</script>

<style lang="less" scoped>
    .Header {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 50px;
        background: @color-black;
        color: @color-white;

        &-inner {
            width: @content-width;
            margin: 0 auto;
        }

        &-item {
            display: inline-block;
            padding: 10px 20px;
            background: transparent;
            transition: background, color;
            transition-duration: @animation-duration;

            &:hover, &.nuxt-link-exact-active, &--search.nuxt-link-active {
                background: @color-white;
                color: @color-black;
                opacity: 1;
            }
        }
    }
</style>