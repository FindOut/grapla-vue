<template>
  <path class="grapla-relationship" :d="path"></path>
</template>

<script>
import $ from 'jquery'
import Vue from 'vue'

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
    window.addEventListener('resize', this.setRelationshipPath);
  },
  methods: {
    setRelationshipPath() {
      // reference to this
      var self = this;
      // wait until render is done
      Vue.nextTick(function () {
        // get element attributes relative to document
        var fromElement = $('.grapla-box.' + self.data.from)[0].getBoundingClientRect();
        var toElement = $('.grapla-box.' + self.data.to)[0].getBoundingClientRect();
        // get container attributes relative to document
        var containerElement = $('#grapla')[0].getBoundingClientRect();
        // get scroll values of container
        containerElement.scrollTop = $('#grapla')[0].scrollTop;
        containerElement.scrollLeft = $('#grapla')[0].scrollLeft;
        // store all attributes relative to container
        var rel = {
          fromElement: {
            top: fromElement.top - containerElement.top + containerElement.scrollTop,
            left: fromElement.left - containerElement.left + containerElement.scrollLeft
          },
          toElement: {
            top: toElement.top - containerElement.top + containerElement.scrollTop,
            left: toElement.left - containerElement.left + containerElement.scrollLeft
          }
        };
        // set path values
        self.path = "M" + (rel.fromElement.left + (fromElement.width  / 2)                                                          ) +
                    " " + (rel.fromElement.top  + (fromElement.height / 2)                                                          ) +
                    "C" + (rel.fromElement.left + (fromElement.width  / 2) + ((rel.toElement.left - rel.fromElement.left) * (0.5))  ) +
                    " " + (rel.fromElement.top  + (fromElement.height / 2) + ((rel.toElement.top  - rel.fromElement.top)  * (0.5))  ) +
                    "," + (rel.toElement.left   + (toElement.width    / 2) - ((rel.toElement.left - rel.fromElement.left) * (0.5))  ) +
                    " " + (rel.toElement.top    + (toElement.height   / 2) - ((rel.toElement.top  - rel.fromElement.top)  * (0.5))  ) +
                    "," + (rel.toElement.left   + (toElement.width    / 2)                                                          ) +
                    " " + (rel.toElement.top    + (toElement.height   / 2)                                                          ) ;
      });
    }
  }
}
</script>

<style lang="scss">
.grapla-relationship {
  fill: none;
  stroke: rgba(0, 199, 255, 0.5);
  stroke-width: 3;
  stroke-dasharray: 8,2;
  pointer-events: auto;
}
.grapla-relationship:hover {
  stroke-width: 6;
  animation: movingStrokes 0.75s infinite linear;
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
