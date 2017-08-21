<template>
  <section id="grapla">
    <div id="grapla-boxes">
      <slot></slot>
    </div>
    <svg>

    </svg>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import "../style/vars.scss";

#grapla {
  position: relative;
  width: 100%;
  height: 100%;
  #grapla-boxes {
    position: absolute;
    width: calc(100% - #{$grapla-spacing});
    height: calc(100% - #{$grapla-spacing});
    display: flex;
    flex-wrap: wrap;
    overflow: scroll;
    padding: 0 $grapla-spacing $grapla-spacing 0;
    background: #eee;
  }
  svg {
    position: absolute;
    width: 10px;
    height: 10px;
    overflow: visible;
  }
}
</style>
