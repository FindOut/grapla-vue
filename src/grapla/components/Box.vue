<template>
  <div class="grapla-box">
    <p>{{data.text}}</p>
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
@import "../style/vars.scss";

.grapla-box {
  margin: $grapla-spacing 0 0 $grapla-spacing;
  padding: 0 $grapla-spacing $grapla-spacing 0;
  box-shadow: 0 10px 35px rgba(0,0,0,0.1);
  background: white;
}
p {
  margin: $grapla-spacing 0 0 $grapla-spacing;
}
</style>
