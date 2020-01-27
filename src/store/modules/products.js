import Vue from 'vue'

export default {
  namespaced: true,
  state: {
    items: []
  },
  getters: {
    items (state) {
      return state.items
    },
    itemsMap (state) {
      const itemsMap = {}

      for (let i = 0; i < state.items.length; i++) {
        const product = state.items[i]
        itemsMap[product.id] = product
      }
      return itemsMap
    },
    item: (state, getters) => (id) => {
      return getters.itemsMap[id]
    }

  },
  mutations: {
    loadItems (state, payload) {
      state.items = payload
    }

  },
  actions: {
    loadItems (store) {
      Vue.axios.get('/products/')

        .then(response => {
          store.commit('loadItems', response.data)
        })
        .catch(err => {
          console.log('-------error-------')
          console.log(err)
        })
    }

  }
}
