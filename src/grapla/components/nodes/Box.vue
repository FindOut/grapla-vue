<template>
  <div :class="['grapla-box', 'grapla-node', data.id + '']">
    <div class="grapla-box-info">
      <p class="grapla-box-id">{{data.id}}. </p>
      <p class="grapla-box-text">{{data.text}}</p>
    </div>
    <slot>
      <dynamic-component
        v-for="comp in data.children"
        :data="comp"
        :key="comp.id">
      </dynamic-component>
    </slot>
  </div>
</template>

<script>
import dynamicComponent from './DynamicComponent.vue'

export default {
  props: {
    data: Object
  },
  components: {
    dynamicComponent
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/vars.scss";

.grapla-box {
  overflow: auto;
  margin: $grapla-spacing 0 0 $grapla-spacing;
  padding: 0 $grapla-spacing $grapla-spacing 0;
  box-shadow: 0 10px 35px rgba(0,0,0,0.1);
  transition: 0.25s;
  color: black;
  background: white;
  &:hover {
    color: $grapla-highlight-text-color;
    background: $grapla-highlight-box-color;
  }
  .grapla-box-info {
    margin: $grapla-spacing 0 0 $grapla-spacing;
    display: block;
    p {
      display: inline-block;
      margin: 0;
    }
  }
}
</style>
