<template>
    <div class="Circuit s-item-page">
        <div class="s-text-title">{{paper.name}}</div>
        <div class="s-text-caption">{{paper.description}}</div>
        <div class="s-item-page-info s-text-common">
            <div class="s-block">
                <div class="s-text-subtitle">Place</div>
                <div class="s-block-content" v-html="paper.place"/>
            </div>
            <div class="s-block">
              <div class="s-text-subtitle">doi</div>
              <div class="s-block-content" v-html="paper.doi"/>
            </div>
            <div class="s-block" v-if="paper.tags && paper.tags.length">
                <div class="s-text-subtitle">Tags</div>
                <div class="s-block-content">
                    <span v-for="tag in paper.tags">{{tag.name}}</span>
                </div>
            </div>
            <div class="s-block" v-if="paper.authors && paper.authors.length">
              <div class="s-text-subtitle">Authors</div>
              <div class="s-block-content">
                <span v-for="author in paper.authors">{{author.name}}</span>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Collapsible from "../../components/Collapsible";

    export default {
        name: "Paper",

        components: {
            Collapsible
        },

        async asyncData({$axios, route}) {
            const paper = await $axios.$get(`/api/paper/${route.params.id}`);

            return {
              paper
            }
        }
    }
</script>

<style scoped lang="less">

</style>