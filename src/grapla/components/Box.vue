<template>
  <div :class="['grapla-box', data.id + '']">
    <p>{{data.id}}. {{data.text}}</p>
    <slot>
      <component
        v-for="comp in data.children"
        :is="comp.type"
        :data="comp"
        :key="comp.id">
      </component>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  },
  created: function () {
    // go through all child components
    for(var comp of this.data.children) {
      // check if child component has not been imported
      if(!this.$options.components[comp.type]) {
        // import correct component based on type
        this.$options.components[comp.type] = require('./' + comp.type + '.vue');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../style/vars.scss";

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
