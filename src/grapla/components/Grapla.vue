<template>
  <section id="grapla">
    <div id="grapla-boxes">
      <slot></slot>
    </div>
    <svg v-if="showSvg">
      <defs>
        <marker id='grapla-relationship-arrow' orient="auto" markerWidth='5' markerHeight='5' refX='0' refY='0'>
          <path d='M-5,-2 V2 L2,0 Z'/>
        </marker>
      </defs>
      <slot name="rels"></slot>
    </svg>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      showSvg: true
    }
  },
  mounted() {
    // select the target node
    var target = document.querySelector('#grapla-boxes');
    // reference to this
    var self = this;
    // create an observer instance
    var observer = new MutationObserver(function(mutations) {
      // force re-render
      self.showSvg = false;
      self.$nextTick(() => {
        self.showSvg = true;
      });
    });
    // configuration of the observer:
    var config = { attributes: true, childList: true, characterData: true }
    // pass in the target node, as well as the observer options
    observer.observe(target, config);
  }
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
    #grapla-relationship-arrow {
      overflow: visible;
      path {
        fill: $grapla-relationship-color;
      }
    }
  }
}
</style>
