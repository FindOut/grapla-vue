<template>
  <defs>
    <marker id='grapla-relationship-arrow' orient="auto" markerWidth='5' markerHeight='5' refX='0' refY='0'>
      <path d='M-5,-4 V4 L2,0 Z'/>
    </marker>
  </defs>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import "../../style/vars.scss";

#grapla-relationship-arrow {
  overflow: visible;
  path {
    fill: $grapla-relationship-color;
  }
}
</style>
