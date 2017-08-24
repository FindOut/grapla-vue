<template>
  <component :is="data.type" :data="data"></component>
</template>

<script>
export default {
  props: {
    data: Object
  },
  created: function () {
    // import correct component based on type
    this.$options.components[this.data.type] = require('./' + this.data.type + '.vue');
  }
}
</script>

<style lang="scss" scoped>

</style>
