export default {
  namespaced: true,
  state: {
    products: [],
    cartCnt: 0
  },
  getters: {
    products (state) {
      return state.products
    },
    cartCnt (state) {
      return state.cartCnt
    },
    getProductById: state => id => {
      return state.products.find(product => product.id === id)
    },
    inCartIds (state) {
      return state.products.map(item => item.id)
    },
    totalPrice (state) {
      return state.products.reduce((total, product) => {
        return total + product.price * product.qty
      }, 0)
    }
  },
  mutations: {
    add (state, payload) {
      const products = this.getters['products/items']

      const product = products.find(product => product.id === payload)

      state.products.push({
        id: product.id,
        title: product.title,
        price: product.price,
        img: product.img,
        qty: 1
      })
      state.cartCnt++
    },
    remove (state, id) {
      const product = state.products.find(product => product.id === id)
      state.products.splice(state.products.findIndex(el => el.id === id), 1)
      state.cartCnt -= product.qty
    },
    increment (state, id) {
      const product = state.products.find(product => product.id === id)
      product.qty++
      state.cartCnt++
    },
    decrement (state, id) {
      const product = state.products.find(product => product.id === id)
      if (product.qty > 0) {
        product.qty--
        state.cartCnt--
        if (product.qty === 0) {
          state.products.splice(state.products.findIndex(el => el.id === id), 1)
        }
      }
    },
    clearCart (state) {
      state.products = []
      state.cartCnt = 0
    }
  },
  actions: {
    add (store, payload) {
      store.commit('add', payload)
    },
    remove (store, id) {
      store.commit('remove', id)
    },
    increment (store, id) {
      store.commit('increment', id)
    },
    decrement (store, id) {
      store.commit('decrement', id)
    },
    clearCart (store) {
      store.commit('clearCart')
    }
  }
}
