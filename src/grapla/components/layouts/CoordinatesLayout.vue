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
        left:   props.x,
        top:    props.y,
        width:  props.width,
        height: props.height
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.grapla-coordinates-layout {
  background: #ddd;
  > * {
    position: absolute;
    transform: translate(-50%,-50%);
    box-sizing: border-box;
    margin: 0;
  }
}
</style>
