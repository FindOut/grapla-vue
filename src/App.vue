<template>
  <div id="app">
    <header>
      <input type="button" value="randomize" v-on:click="createRandomGraplaData()">
    </header>
    <section id="app-sections">
      <section id="app-section-left"></section>
      <section id="app-section-center">
        <grapla>
          <coordinates-layout :data="{height: 600}" slot="layout">
            <box :data="{id: 99, text: 'test', x: 300, y: 400, width: 200, height: 100}"></box>
            <ball :data="{id: 100, x: 700, y: 300, width: 150, height: 150}"></ball>
            <box :data="{id: 101, text: 'test test', x: 300, y: 150, width: 100, height: 200}">
              <ball :data="{id: 102}"></ball>
            </box>
          </coordinates-layout>
          <relationship :data="{ from: 99, to: 100 }" slot="rels"></relationship>
          <relationship :data="{ from: 100, to: 102 }" slot="rels"></relationship>
          <relationship :data="{ path: 'M200 400,C100 400,100 150,250 150' }" slot="rels"></relationship>
          <flex-wrap-layout slot="layout">
            <dynamic-component
              v-for="node in grapla.nodes"
              :data="node"
              :key="node.id">
            </dynamic-component>
          </flex-wrap-layout>
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
// import grapla from './grapla/index'
import * as grapla from 'grapla-vue'
import {mapState} from 'vuex'
import store from './store/store'

console.log(grapla);

export default {
  name: 'app',
  computed: {
    ...mapState([
      'grapla'
    ])
  },
  components: {
    ...grapla.components
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
