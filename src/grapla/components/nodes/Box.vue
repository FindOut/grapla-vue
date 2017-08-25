<template>
  <div :class="['grapla-box', data.id + '']">
    <p>{{data.id}}. {{data.text}}</p>
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
  p {
    margin: $grapla-spacing 0 0 $grapla-spacing;
    display: block;
  }
}
</style>
