<template>
    <form class="Search">
        <input class="s-input" :placeholder="placeholder" v-model="form.query">
        <div class="Search-select" v-if="selectOptions.length">
            <select-box :options="selectOptions" v-model="form.section"/>
        </div>
        <button class="s-button" type="submit">Search</button>
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
            }
        },

        data() {
            return {
                form: {
                    query: '',
                    section: SCHEME_SELECT_TYPE_TAGS
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