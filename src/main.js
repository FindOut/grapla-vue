import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import store from './store/store'

new Vue({
  el: '#app',
  store,
  render: h => h(App),
  created() {
    store.commit('createRandomGraplaData');
  }
})
