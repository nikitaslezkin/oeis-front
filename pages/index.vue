<template>
    <div class="Index">
        <div class="s-text-title">Search schemes</div>
        <div class="s-search">
            <search placeholder="1, 2, 3, 5, 10"/>
        </div>
    </div>
</template>

<script>
    import Search from '~/components/Search.vue';

    export default {
        components: {
            Search
        }
    }
</script>

<style lang="less">
    .Index {
    }
</style>
