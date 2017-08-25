<template>
  <div class="grapla-layout grapla-flex-wrap-layout">
    <slot></slot>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import "../../style/vars.scss";

.grapla-flex-wrap-layout {
  padding: 0 $grapla-spacing $grapla-spacing 0;
  display: flex;
  flex-wrap: wrap;
}
</style>
