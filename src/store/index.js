import Vue from 'vue'
import Vuex from 'vuex'

import cart from './modules/cart'
import products from './modules/products'
import menu from './modules/menu'
import checkout from './modules/checkout'
import quiz from './modules/quiz'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    cart,
    products,
    menu,
    checkout,
    quiz
  },
  strict: process.env.NODE_ENV !== 'production'
})
