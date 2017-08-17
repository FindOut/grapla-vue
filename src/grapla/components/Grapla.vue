<template>
  <section id="grapla">
    <box v-for="box in data.boxes" :key="box.id"></box>
  </section>
</template>

<script>

import box from './Box.vue'

export default {
  props: {
    data: Object
  },
  components: {
    box
  }
}
</script>

<style lang="scss">
#grapla {
  width: 100%;
  height: 100%;
}
</style>
