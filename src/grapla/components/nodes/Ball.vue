<template>
  <div :class="['grapla-ball', data.id + '']">
    <p>{{data.id}}</p>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/vars.scss";

.grapla-ball {
  display: inline-block;
  margin: $grapla-spacing 0 0 $grapla-spacing;
  width: calc(#{$grapla-spacing} * 2);
  height: calc(#{$grapla-spacing} * 2);
  box-shadow: 0 10px 35px rgba(0,0,0,0.1);
  border-radius: 50%;
  transition: 0.25s;
  color: black;
  background: white;
  position: relative;
  &:hover {
    color: $grapla-highlight-text-color;
    background: $grapla-highlight-box-color;
  }
  p {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
