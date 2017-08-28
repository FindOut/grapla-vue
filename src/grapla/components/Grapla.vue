<template>
  <section id="grapla">
    <section id="grapla-nodes">
      <slot name="layout">
        <flex-wrap-layout>
          <slot></slot>
        </flex-wrap-layout>
      </slot>
    </section>
    <svg id="grapla-relationships" v-if="showSvg">
      <slot name="markers">
        <relationship-marker></relationship-marker>
      </slot>
      <slot name="rels"></slot>
    </svg>
  </section>
</template>

<script>
import flexWrapLayout from './layouts/FlexWrapLayout.vue'
import relationshipMarker from './relationships/RelationshipMarker.vue'
import $ from 'jquery'

export default {
  data: function () {
    return {
      showSvg: true
    }
  },
  components: {
    flexWrapLayout,
    relationshipMarker
  },
  mounted() {
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
    // configuration of the observer
    var config = { attributes: true, childList: true, characterData: true };
    // go through all grapla layout components
    $('.grapla-layout').each(function() {
      // observe the grapla layout component
      observer.observe($(this)[0], config);
    })
  }
}
</script>

<style lang="scss" scoped>
#grapla {
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  #grapla-nodes {
    background: #eee;
  }
  #grapla-relationships {
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    overflow: visible;
  }
}
</style>
