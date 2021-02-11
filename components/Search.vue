<template>
    <form class="Search">
        <input class="s-input" :placeholder="placeholder">
        <button class="s-button" type="submit">Search</button>
    </form>
</template>

<script>
    export default {
        name: "Search",

        props: {
            placeholder: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="less" scoped>
    .Search {
        display: flex;

        input {
            flex: 1;
            margin-right: 20px;
        }
    }
</style>