<template>
    <div class="Circuit s-item-page">
        <div class="s-text-title">{{circuit.name}}</div>
        <div class="s-text-caption">{{circuit.description}}</div>
        <div class="s-item-page-info s-text-common">

            <div class="s-block">
                <div class="Circuit-circuit s-block" v-if="circuit">
                  <collapsible title="CKT-format" :content="circuit.ckt"/>
                </div>
            </div>

            <div class="s-block">
              <div class="Circuit-circuit s-block" v-if="circuit">
                <collapsible title="Truth table" :content="circuit.truth_table"/>
              </div>
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
                circuitImage: null
            }
        },

        async asyncData({$axios, route}) {
            const circuit = await $axios.$get(`/api/circuit/${route.params.id}`);

            const image = await $axios.$get(`/api2/get_image_by_ckt?ckt=${circuit.ckt}`);


          const circuitImage = 'data:image/png;base64, ' + image.toString().substring(2, image.toString().length - 1);

            return {
                circuit, circuitImage
            }
        }
    }
</script>

<style scoped lang="less">
.Circuit {
  &-circuit {
    white-space: pre;
  }
}
</style>