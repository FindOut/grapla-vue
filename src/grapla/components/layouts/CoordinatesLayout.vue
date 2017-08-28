<template>
  <div class="grapla-layout grapla-coordinates-layout" :style="{ width: data.width + 'px', height: data.height + 'px' }">
    <slot></slot>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  props: {
    data: Object
  },
  mounted() {
    // set position and size of child components
    for (var comp of this.$children) {
      var props = comp._props.data;
      $(comp.$el).css({
        left: props.x - (props.width / 2),
        top: props.y - (props.height / 2),
        width: props.width,
        height: props.height
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/vars.scss";

.grapla-coordinates-layout {
  background: #ddd;
  > .grapla-node {
    position: absolute;
    box-sizing: border-box;
    margin: 0;
  }
}
</style>
