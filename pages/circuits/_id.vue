<template>
    <div class="Circuit s-item-page">
        <div class="s-text-title">{{circuit.name}}</div>
        <div class="s-text-caption">{{circuit.description}}</div>
        <div class="s-item-page-info s-text-common">
            <div class="s-block">
                <div class="s-text-subtitle">CKT-format</div>
                <div class="s-block-content" v-html="circuit.ckt"/>
            </div>
            <div class="s-block">
                <collapsible title="Truth table" :content="circuit.truth_table"/>
            </div>
            <div class="s-block">
                <div class="s-text-subtitle">Image</div>
                <div class="s-block-content">
                    <img :src="circuitImage"/>
                </div>
            </div>
            <div class="s-block">
                <div class="s-text-subtitle">Basis</div>
                <div class="s-block-content" v-text="circuit.basis.name"/>
            </div>
            <div class="s-block" v-if="circuit.tags && circuit.tags.length">
                <div class="s-text-subtitle">Tags</div>
                <div class="s-block-content">
                    <span v-for="tag in circuit.tags">{{tag.name}}</span>
                </div>
            </div>
            <div class="s-block" v-if="circuit.articles && circuit.articles.length">
                <div class="s-text-subtitle">Articles</div>
                <div class="s-block-content">
                    <span v-for="article in circuit.articles">{{article.name}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Collapsible from "../../components/Collapsible";

    export default {
        name: "Circuit",

        components: {
            Collapsible
        },

        data() {
            return {
                circuitImage: 'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=='
            }
        },

        async asyncData({$axios, route}) {
            const circuit = await $axios.$get(`/api/circuit/${route.params.id}`);

            return {
                circuit
            }
        }
    }
</script>

<style scoped lang="less">

</style>