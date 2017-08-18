import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    grapla: {}
  },
  actions: {

  },
  mutations: {
    createRandomGraplaData(state) {
      // empty data to begin with
      state.grapla = {
        boxes: [],
        relationships: []
      };
      // possible text for boxes
      var text = [
        'hello grapla',
        'booooox',
        'boooooxes everywhere',
        'this is another box',
        'more boxes for you',
        'box',
        'enough boxes for ya?',
        'really? more boxes?',
        'ok fam whats with the boxes'
      ];
      // next box id
      var id = 0;
      // number of top level boxes
      var boxCount = 20 + Math.floor(Math.random() * 21);
      // populate with boxes
      for (var i = 0; i < boxCount; i++) {
        // create top level box
        state.grapla.boxes.push({
          id,
          text: text[Math.floor(Math.random() * text.length)],
          children: []
        });
        // increment id
        id++;
        // number of child boxes
        var childBoxCount = Math.floor(Math.random() * 4);
        // populate with child boxes
        for (var ii = 0; ii < childBoxCount; ii++) {
          // create child box
          state.grapla.boxes[i].children.push({
            id,
            text: text[Math.floor(Math.random() * text.length)],
            children: []
          });
          // increment id
          id++;
        }
      }
    }
  },
  getters: {

  }
});

export default store
