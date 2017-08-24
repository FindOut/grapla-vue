<template>
  <div id="grapla-layout">
    <slot></slot>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import "../style/vars.scss";

#grapla-layout {
  position: absolute;
  padding: 0 $grapla-spacing $grapla-spacing 0;
  display: flex;
  flex-wrap: wrap;
}
</style>
