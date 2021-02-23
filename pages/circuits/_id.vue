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
                <div class="s-text-subtitle">Truth table</div>
                <div class="s-block-content" v-html="circuit.truth_table"/>
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
    export default {
        name: "Circuit",

        data() {
            return {
                // circuit: {
                //     name: 'Fibonacci',
                //     description: '0 1 1 2 3 5 8',
                //     ckt: 'a(1) = 1 [o]; a(2) = 1 [o-o]; a(3) = 1 [o-o-o];<br>' +
                //         'a(4) = 2 [o-o-o and o-o-o-o]<br>',
                //     truth_table: 'a(n) = A000081(n) - A217420(n+1), n > 0. - R. J. Mathar, Sep 19 2016<br>' +
                //         'a(n) = A000676(n)+A000677(n). - R. J. Mathar, Aug 13 2018',
                //     basis: {
                //         name: 'Basis Name'
                //     },
                //     tags: [
                //         {
                //             name: 'tag1'
                //         },
                //         {
                //             name: 'tag2'
                //         },
                //         {
                //             name: 'tag3'
                //         }
                //     ],
                //     articles: [
                //         {
                //             name: 'article1'
                //         },
                //         {
                //             name: 'article2'
                //         },
                //         {
                //             name: 'article3'
                //         }
                //     ]
                // },
                circuitImage: 'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=='
            }
        },

        async asyncData({$axios, route}) {
            const circuit = await $axios.$get('/api/circuit/get_by_id', {
                params: {
                    id: route.params.id
                }
            });

            return {
                circuit
            }
        }
    }
</script>

<style scoped lang="less">

</style>