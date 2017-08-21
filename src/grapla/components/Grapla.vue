<template>
  <section id="grapla">
    <div id="grapla-boxes">
      <slot></slot>
    </div>
    <svg>
      <slot name="rels"></slot>
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
  overflow: scroll;
  #grapla-boxes {
    position: absolute;
    padding: 0 $grapla-spacing $grapla-spacing 0;
    display: flex;
    flex-wrap: wrap;
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
