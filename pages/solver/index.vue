<template>
  <div class="Solver">
    <div class="s-text-title">Solver</div>
    <div class="Solver-form s-block">
      <input class="s-input" placeholder="N" v-model="form.n">
      <input class="s-input" placeholder="K" v-model="form.k">
      <input class="s-input" placeholder="Truth table" v-model="form.table">
      <button class="s-button" @click="solve">Solve</button>
    </div>
    <div class="Solver-circuit s-block" v-if="circuit">
      <div class="s-block-content" v-html="v"/>
    </div>
    <div class="s-block" v-if="circuitImage">
      <div class="s-text-subtitle">Image</div>
      <div class="s-block-content">
        <img :src="circuitImage"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Solver",

  data() {
    return {
      form: {
        n: '',
        k: '',
        table: ''
      },
      circuit: null,
      circuitImage: null
    };
  },

  methods: {
    async solve() {
      this.circuit = await this.$axios.$get(`/api2/get_solve`, {
        params: this.form
      });

      const image = await this.$axios.$get(`/api2/get_image`, {
        params: this.form
      });

      this.circuitImage = 'data:image/png;base64, ' + image.toString().substring(2, image.toString().length - 1);
    }
  }
}
</script>

<style scoped lang="less">
.Solver {
  &-form {
    display: flex;

    input {
      flex: 1;
      margin-right: 20px;
    }
  }

  &-circuit {
    white-space: pre;
  }

  &-select {
    width: 150px;
    margin-right: 20px;
  }
}
</style>