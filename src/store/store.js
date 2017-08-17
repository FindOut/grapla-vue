import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    grapla: {
      boxes: [
        {
          id: 0,
          text: "hello grapla",
          children: [
            {
              id: 1,
              text: "these",
              children: []
            },
            {
              id: 2,
              text: "are",
              children: []
            },
            {
              id: 3,
              text: "child",
              children: []
            },
            {
              id: 4,
              text: "boxes",
              children: []
            }
          ]
        },
        {
          id: 5,
          text: "booooox",
          children: []
        },
        {
          id: 7,
          text: "boooooxes everywhere",
          children: []
        },
        {
          id: 8,
          text: "booooox",
          children: []
        },
        {
          id: 9,
          text: "booooox",
          children: []
        },
        {
          id: 10,
          text: "this is another box",
          children: [
            {
              id: 11,
              text: "and some",
              children: []
            },
            {
              id: 12,
              text: "child boxes",
              children: []
            }
          ]
        },
        {
          id: 13,
          text: "booooox",
          children: []
        },
        {
          id: 14,
          text: "more boxes",
          children: [
            {
              id: 15,
              text: "and some",
              children: []
            },
            {
              id: 16,
              text: "child boxes",
              children: []
            }
          ]
        },
        {
          id: 17,
          text: "enough boxes for ya?",
          children: [
            {
              id: 18,
              text: "child boxes",
              children: []
            }
          ]
        },
        {
          id: 19,
          text: "what's with you and boxes anyway?",
          children: [
            {
              id: 20,
              text: "should I",
              children: []
            },
            {
              id: 21,
              text: "be worried?",
              children: []
            }
          ]
        },
      ],
      relationships: [
        {
          from: 0,
          to: 3,
        },
        {
          from: 7,
          to: 4,
        },
        {
          from: 0,
          to: 1,
        },
        {
          from: 1,
          to: 4,
        },
        {
          from: 3,
          to: 6,
        },
        {
          from: 5,
          to: 9,
        },
        {
          from: 8,
          to: 13,
        },
      ]
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
