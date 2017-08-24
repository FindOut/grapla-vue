<template>
  <div :class="['grapla-box', data.id + '']">
    <p>{{data.id}}. {{data.text}}</p>
    <slot>
      <box
        v-for="box in data.children"
        :data="box"
        :key="box.id">
      </box>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  },
  beforeCreate: function () {
    // this solves the 'circular references between components' issue
    // which is caused by using recursive components
    this.$options.components.box = require('./Box.vue');
  }
}
</script>

<style lang="scss" scoped>
@import "../style/vars.scss";

.grapla-box {
  margin: $grapla-spacing 0 0 $grapla-spacing;
  padding: 0 $grapla-spacing $grapla-spacing 0;
  box-shadow: 0 10px 35px rgba(0,0,0,0.1);
  transition: 0.25s;
  color: black;
  background: white;
  display: flex;
  flex-direction: column;
  &:hover {
    color: $grapla-highlight-text-color;
    background: $grapla-highlight-box-color;
  }
  p {
    margin: $grapla-spacing 0 0 $grapla-spacing;
    display: inline-block;
  }
}
</style>
