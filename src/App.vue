<template>
  <div id="app">
    <header>
      <input type="button" value="randomize" v-on:click="createRandomGraplaData()">
    </header>
    <section id="app-sections">
      <section id="app-section-left"></section>
      <section id="app-section-center">
        <grapla>
          <box
            v-for="box in grapla.boxes"
            :data="box"
            :key="box.id">
          </box>
          <relationship-marker
            slot="markers">
          </relationship-marker>
          <relationship
            v-for="(relationship, index) in grapla.relationships"
            :data="relationship"
            :key="index"
            slot="rels">
          </relationship>
        </grapla>
      </section>
      <section id="app-section-right"></section>
    </section>
    <footer></footer>
  </div>
</template>

<script>
import grapla from './grapla/components/Grapla.vue'
import box from './grapla/components/Box.vue'
import relationship from './grapla/components/Relationship.vue'
import relationshipMarker from './grapla/components/RelationshipMarker.vue'
import {mapState} from 'vuex'
import store from './store/store'

export default {
  name: 'app',
  computed: {
    ...mapState([
      'grapla'
    ])
  },
  components: {
    grapla,
    box,
    relationship,
    relationshipMarker
  },
  methods: {
    createRandomGraplaData() {
      store.commit('createRandomGraplaData');
    }
  }
}
</script>

<style lang="scss">
* {
  font-family: monospace;
}
body {
  margin: 0;
  padding: 0;
}
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
#app-sections {
  display: flex;
  flex: auto;
}
#app-section-center {
  flex: auto;
}
header, footer, section {
  background: white;
}
header, footer, #app-section-left, #app-section-right {
  flex-basis: 100px;
  flex-shrink: 0;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}
header {
  z-index: 2;
  text-align: right;
  input {
    background: #eee;
    border: none;
    height: 80px;
    width: 80px;
    border-radius: 50%;
    margin: 10px;
    transition: 0.5s;
    &:focus {
      outline: none;
    }
    &:active {
      background: #333;
      color: white;
      transition: 0s;
    }
  }
}
#app-section-left {
  z-index: 1;
}
footer {
  z-index: 3;
}
</style>
