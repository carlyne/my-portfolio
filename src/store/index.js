import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    galleryItems : []
  },

  mutations: {
    addItem(state, item) {
      state.galleryItems.push(item);
    }
  },

  actions: {
    fetchGalleryItems({commit}) {
      fetch("http://localhost:8080/gallery.json")
        .then (response => response.json())
        .then(data => {
          for(let item of data) {
            commit('addItem', item);
          }
        });
    }
  }
})
