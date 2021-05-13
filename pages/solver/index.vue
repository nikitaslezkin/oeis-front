<template>
    <div class="Index">
        <div class="s-text-title">Solver</div>
        <div class="s-block">

          <div class="s-block-content" v-html="solver"/>
        </div>

<!--      <div class="s-block">-->
<!--        <div class="s-text-subtitle">Image</div>-->
<!--        <div class="s-block-content">-->
<!--          <img :src="circuitImage"/>-->
<!--        </div>-->
<!--      </div>-->


      <div class="s-block">
        <div class="s-text-subtitle">Image</div>
        <div class="s-block-content">
          <img :src="circuitImage"/>
        </div>
      </div>

    </div>
</template>

<script>
import Collapsible from "../../components/Collapsible";

export default {
  name: "Solver",

  components: {
    Collapsible
  },

  async asyncData({$axios, query}) {
    let solver = [];
    let circuitImage = [];

    console.log('data');


    solver = await $axios.$get(`/api2/get_solve?n=3&k=6&tt=['01101001', '00010111', '00101001']`);
    circuitImage = await $axios.$get(`/api2/get_image?n=3&k=6&tt=['01101001', '00010111', '00101001']`);
    circuitImage = "data:image/png;base64, " + circuitImage.toString().substring(2, circuitImage.toString().length-1)
    console.log(solver);

    return {
      solver, circuitImage
    }
  }
}
</script>

<style scoped lang="less">

</style>