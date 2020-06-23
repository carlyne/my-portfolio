import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    galleryItems : [],
    filteredItems: []
  },

  mutations: {
    addItem(state, item) {
      state.galleryItems.push(item);
    },

    filtering(state, category) {
      state.filteredItems = state.galleryItems.filter(item => 
        item.category === category
      )
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
    },

    filterGalleryItem({commit}, category) {
      commit('filtering', category)
    }
  }
})
