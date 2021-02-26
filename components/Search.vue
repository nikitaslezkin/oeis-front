<template>
    <form class="Search" @submit.prevent="$emit('search', form)">
        <input class="s-input" :placeholder="placeholder" v-model="form.search">
        <div class="Search-select" v-if="selectOptions.length">
            <select-box :options="selectOptions" v-model="form.kind"/>
        </div>
        <component class="s-button" :to="{name: route, query: form}"
                   :is="route && form.search ? 'router-link' : 'button'" type="submit">
            Search
        </component>
    </form>
</template>

<script>
    import SelectBox from "./SelectBox.vue";

    import {SCHEME_SELECT_TYPE_TAGS} from "../constants/Constants";

    export default {
        name: "Search",

        components: {
            SelectBox
        },

        props: {
            placeholder: {
                type: String,
                default: ''
            },
            selectOptions: {
                type: Array,
                default: () => []
            },
            route: String
        },

        data() {
            return {
                form: {
                    search: '',
                    kind: SCHEME_SELECT_TYPE_TAGS
                }
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

        &-select {
            width: 150px;
            margin-right: 20px;
        }
    }
</style>