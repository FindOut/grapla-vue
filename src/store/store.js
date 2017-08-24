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
        nodes: [],
        relationships: []
      };
      // possible text for nodes
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
      // possible types for nodes
      var types = [
        'Box',
        'Ball'
      ];
      // next node id
      var id = 0;
      // number of top level nodes
      var nodeCount = 20 + Math.floor(Math.random() * 21);
      // populate with nodes
      for (var i = 0; i < nodeCount; i++) {
        // create top level node
        state.grapla.nodes.push({
          id,
          text: text[Math.floor(Math.random() * text.length)],
          children: []
        });
        // increment id
        id++;
        // number of child nodes
        var childBoxCount = Math.floor(Math.random() * 4);
        // populate with child nodes
        for (var ii = 0; ii < childBoxCount; ii++) {
          // create child node
          state.grapla.nodes[i].children.push({
            id,
            text: text[Math.floor(Math.random() * text.length)],
            type: types[Math.floor(Math.random() * types.length)],
            children: []
          });
          // increment id
          id++;
        }
      }
      // number of relationships
      var relationshipCount = 10 + Math.floor(Math.random() * 11);
      // populate with relationships
      for (var i = 0; i < relationshipCount; i++) {
        // create relationship
        state.grapla.relationships.push({
          from: Math.floor(Math.random() * id),
          to: Math.floor(Math.random() * id)
        });
      }
    }
  },
  getters: {

  }
});

export default store
