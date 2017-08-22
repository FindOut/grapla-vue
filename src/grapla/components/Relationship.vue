<template>
  <path class="grapla-relationship" :d="path" marker-end='url(#grapla-relationship-arrow)'></path>
</template>

<script>
import $ from 'jquery'
import Vue from 'vue'
import _ from 'lodash'

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
      // reference to this
      var self = this;
      // wait until render is done
      Vue.nextTick(function () {
        // get elements from dom
        var fromElement = $('.grapla-box.' + self.data.from)[0];
        var toElement = $('.grapla-box.' + self.data.to)[0];
        var containerElement = $('#grapla')[0];
        // end function if elements can't be found
        if (!fromElement || !toElement || !containerElement) return;
        // get element attributes relative to document
        fromElement = fromElement.getBoundingClientRect();
        toElement = toElement.getBoundingClientRect();
        containerElement = containerElement.getBoundingClientRect();
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
        // set center x and y, right, and bottom positions
        rel.fromElement.centerX = rel.fromElement.left  + (fromElement.width  / 2);
        rel.fromElement.centerY = rel.fromElement.top   + (fromElement.height / 2);
        rel.fromElement.right   = rel.fromElement.left  + fromElement.width;
        rel.fromElement.bottom  = rel.fromElement.top   + fromElement.height;
        rel.toElement.centerX   = rel.toElement.left    + (toElement.width    / 2);
        rel.toElement.centerY   = rel.toElement.top     + (toElement.height   / 2);
        rel.toElement.right     = rel.toElement.left    + toElement.width;
        rel.toElement.bottom    = rel.toElement.top     + toElement.height;

        // set path from edge to edge, which edge decided by the position of the two elements

        // check positional relationship between the elements
        if (Math.abs(rel.toElement.centerX - rel.fromElement.centerX) > Math.abs(rel.toElement.centerY - rel.fromElement.centerY)) {
          // the to element is primarily to the left or right of the from element

          if(rel.fromElement.centerX < rel.toElement.centerX) {
            // the to element is primarily to the right of the from element

            // set path from the right edge of the from element to the left edge of the to element
            self.path = "M" + (  rel.fromElement.right                           ) +
                        " " + (  rel.fromElement.centerY                         ) +
                        "C" + ( (rel.fromElement.right + rel.toElement.left) / 2 ) +
                        " " + (  rel.fromElement.centerY                         ) +
                        "," + ( (rel.fromElement.right + rel.toElement.left) / 2 ) +
                        " " + (  rel.toElement.centerY                           ) +
                        "," + (  rel.toElement.left                              ) +
                        " " + (  rel.toElement.centerY                           ) ;

          } else {
            // the to element is primarily to the left of the from element

            // set path from the left edge of the from element to the right edge of the to element
            self.path = "M" + (  rel.fromElement.left                            ) +
                        " " + (  rel.fromElement.centerY                         ) +
                        "C" + ( (rel.fromElement.left + rel.toElement.right) / 2 ) +
                        " " + (  rel.fromElement.centerY                         ) +
                        "," + ( (rel.fromElement.left + rel.toElement.right) / 2 ) +
                        " " + (  rel.toElement.centerY                           ) +
                        "," + (  rel.toElement.right                             ) +
                        " " + (  rel.toElement.centerY                           ) ;

          }
        } else {
          // the to element is primarily above or below the from element

          if(rel.fromElement.centerY < rel.toElement.centerY) {
            // the to element is primarily below the from element

            // set path from the bottom edge of the from element to the top edge of the to element
            self.path = "M" + (  rel.fromElement.centerX                         ) +
                        " " + (  rel.fromElement.bottom                          ) +
                        "C" + (  rel.fromElement.centerX                         ) +
                        " " + ( (rel.fromElement.bottom + rel.toElement.top) / 2 ) +
                        "," + (  rel.toElement.centerX                           ) +
                        " " + ( (rel.fromElement.bottom + rel.toElement.top) / 2 ) +
                        "," + (  rel.toElement.centerX                           ) +
                        " " + (  rel.toElement.top                               ) ;

          } else {
            // the to element is primarily above the from element

            // set path from the top edge of the from element to the bottom edge of the to element
            self.path = "M" + (  rel.fromElement.centerX                         ) +
                        " " + (  rel.fromElement.top                             ) +
                        "C" + (  rel.fromElement.centerX                         ) +
                        " " + ( (rel.fromElement.top + rel.toElement.bottom) / 2 ) +
                        "," + (  rel.toElement.centerX                           ) +
                        " " + ( (rel.fromElement.top + rel.toElement.bottom) / 2 ) +
                        "," + (  rel.toElement.centerX                           ) +
                        " " + (  rel.toElement.bottom                            ) ;

          }
        }

      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../style/vars.scss";

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
