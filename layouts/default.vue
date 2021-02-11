<template>
    <div class="Page">
        <header-view/>
        <div class="Page-content">
            <nuxt/>
        </div>
    </div>
</template>

<script>
    import HeaderView from '~/components/HeaderView.vue';

    export default {
        components: {
            HeaderView
        }
    }
</script>

<style lang="less">
    .Page {
        &-content {
            width: 1000px;
            padding: 100px 20px;
            margin: 0 auto;
        }
    }
</style>
