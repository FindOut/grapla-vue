<template>
  <path class="grapla-relationship" :d="path" marker-end='url(#grapla-relationship-arrow)'></path>
</template>

<script>
import Vue from 'vue'
import _ from 'lodash'
import createRelationshipPath from '../../functions/createRelationshipPath'

export default {
  props: {
    data: Object
  },
  data: function () {
    return {
      path: ''
    }
  },
  mounted() {
    // set relationship path
    this.setRelationshipPath();
    // set relationship path again after window resize
    window.addEventListener('resize', _.debounce(this.setRelationshipPath, 300));
  },
  methods: {
    setRelationshipPath() {
      // set relationship path to value sent in as property if it exists
      if (this.data.path) {
        this.path = this.data.path;
        return;
      }
      // reference to this
      var self = this;
      // wait until render is done
      Vue.nextTick(function () {
        self.path = createRelationshipPath(self.data.from, self.data.to);
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/vars.scss";

.grapla-relationship {
  fill: none;
  stroke: $grapla-relationship-color;
  stroke-opacity: 0.5;
  stroke-width: 3;
  stroke-dasharray: 8,2;
  pointer-events: auto;
  &:hover {
    stroke-width: 6;
    animation: movingStrokes 0.75s infinite linear;
  }
}
@keyframes movingStrokes {
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: -10;
  }
}
</style>
