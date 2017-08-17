<template>
  <section id="grapla">
    <box
      v-for="box in data.boxes"
      :data="box"
      :key="box.id">
    </box>
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

<style lang="scss" scoped>
@import "../style/vars.scss";

#grapla {
  width: calc(100% - #{$grapla-spacing});
  height: calc(100% - #{$grapla-spacing});
  display: flex;
  flex-wrap: wrap;
  overflow: scroll;
  padding: 0 $grapla-spacing $grapla-spacing 0;
  background: #eee;
}
</style>
