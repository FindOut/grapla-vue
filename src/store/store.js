import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    grapla: {
      boxes: [
        {
          text: "hello grapla"
          children: [
            {
              text: "these"
              children: []
            },
            {
              text: "are"
              children: []
            },
            {
              text: "child"
              children: []
            },
            {
              text: "boxes"
              children: []
            }
          ]
        },
        {
          text: "booooox"
          children: []
        },
        {
          text: "booooox"
          children: []
        },
        {
          text: "booooox"
          children: []
        },
        {
          text: "booooox"
          children: []
        },
        {
          text: "booooox"
          children: []
        },
        {
          text: "this is another box"
          children: [
            {
              text: "and some"
              children: []
            },
            {
              text: "child boxes"
              children: []
            }
          ]
        },
        {
          text: "booooox"
          children: []
        }
      ]
      relationships: []
    }
  },
  actions: {

  },
  mutations: {

  },
  getters: {

  }
});

export default store
