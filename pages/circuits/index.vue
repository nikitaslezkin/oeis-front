<template>
    <div class="Circuits">
        <div class="s-text-title">Search circuits</div>
        <div class="s-search">
            <search placeholder="sum, thr, ..." :select-options="selectOptions" route="circuits"/>
        </div>
        <div class="s-results">
            <router-link :to="{name: 'circuits-id', params: {id: circuit.id}}" v-for="circuit in circuits"
                         class="s-result s-block-hover" :key="circuit.id">
                <div class="s-result-title">{{circuit.name}}</div>
                <div class="s-result-description">{{circuit.description}}</div>
            </router-link>
        </div>
    </div>
</template>

<script>
    import Search from '~/components/Search.vue';

    import {SCHEME_SELECT_TYPE_TAGS, SCHEME_SELECT_TYPE_TABLES} from "../../constants/Constants";

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
                // circuits: [
                //     {
                //         id: 1,
                //         name: 'Fibonacci',
                //         description: '0 1 1 2 3 5 8'
                //     },
                //     {
                //         id: 2,
                //         name: 'Geometrical',
                //         description: '1 2 4 8 16 32'
                //     },
                //     {
                //         id: 3,
                //         name: 'Arithmetic',
                //         description: '1 2 3 4 5 6 7 8'
                //     }
                // ]
            }
        },

        watchQuery: true,

        async asyncData({$axios, query}) {
            let circuits = [];

            console.log('data');

            if (query.search) {
                circuits = await $axios.$get(`/api/circuit/search`, {
                    params: query
                });
            }

            console.log(circuits);

            return {
                circuits
            }
        }
    }
</script>

<style lang="less">
    .Circuits {
    }
</style>
