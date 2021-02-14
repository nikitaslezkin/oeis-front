<template>
    <div class="Index">
        <div class="s-text-title">Search schemes</div>
        <div class="s-search">
            <search placeholder="1, 2, 3, 5, 10" :select-options="selectOptions"/>
        </div>
    </div>
</template>

<script>
    import Search from '~/components/Search.vue';

    import {SCHEME_SELECT_TYPE_TAGS, SCHEME_SELECT_TYPE_TABLES} from "../constants/Constants";

    export default {
        components: {
            Search
        },

        data() {
            return {
                selectOptions: [
                    {
                        value: SCHEME_SELECT_TYPE_TAGS,
                        title: 'By Tags'
                    },
                    {
                        value: SCHEME_SELECT_TYPE_TABLES,
                        title: 'By Tables'
                    }
                ]
            }
        }
    }
</script>

<style lang="less">
    .Index {
    }
</style>
