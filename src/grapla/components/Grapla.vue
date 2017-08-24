<template>
  <section id="grapla">
    <slot name="layout">
      <flex-layout>
        <slot></slot>
      </flex-layout>
    </slot>
    <svg v-if="showSvg">
      <slot name="markers">
        <relationship-marker></relationship-marker>
      </slot>
      <slot name="rels"></slot>
    </svg>
  </section>
</template>

<script>
import flexLayout from './FlexLayout.vue'
import relationshipMarker from './RelationshipMarker.vue'

export default {
  data: function () {
    return {
      showSvg: true
    }
  },
  components: {
    flexLayout,
    relationshipMarker
  },
  mounted() {
    // select the target node
    var target = document.querySelector('#grapla-layout');
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
#grapla {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: scroll;
  background: #eee;
  svg {
    position: absolute;
    width: 10px;
    height: 10px;
    overflow: visible;
  }
}
</style>
