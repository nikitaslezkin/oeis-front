<template>
    <div class="Index">
        <div class="s-text-title">Search schemes</div>
        <div class="s-search">
            <search placeholder="1, 2, 3, 5, 10" :select-options="selectOptions"/>
        </div>
        <div class="s-results">
            <router-link :to="{name: 'index'}" v-for="scheme in schemes" class="s-result" :key="scheme.number">
                <div class="s-result-info">
                    <span class="s-result-number">{{scheme.number}}</span>
                    <span class="s-result-title">{{scheme.name}}</span>
                </div>
                <div class="s-result-description">{{scheme.description}}</div>
            </router-link>
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
                ],
                schemes: [
                    {
                        number: 'A01534',
                        name: 'Fibonacci',
                        description: '0 1 1 2 3 5 8'
                    },
                    {
                        number: 'A24234',
                        name: 'Geometrical',
                        description: '1 2 4 8 16 32'
                    },
                    {
                        number: 'A324234',
                        name: 'Arithmetic',
                        description: '1 2 3 4 5 6 7 8'
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
