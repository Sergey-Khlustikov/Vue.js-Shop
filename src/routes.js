import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductsList from './components/ProductsList'
import Product from './components/Product'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import CheckoutSuccess from './components/CheckoutSuccess'
import E404 from './components/E404'
import { store } from './store'
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: { name: 'products' }
  },
  {
    name: 'products',
    path: '/products',
    component: ProductsList,
    beforeEnter (from, to, next) {
      store.dispatch('products/loadItems')
      next()
    }
  },
  {
    path: '/products/:id',
    component: Product
  },
  {
    name: 'cart',
    path: '/cart',
    component: Cart
  },
  {
    path: '/checkout',
    component: Checkout
  },
  {
    path: '/checkout/success',
    component: CheckoutSuccess
  },
  {
    path: '*',
    component: E404
  }
]

export const router = new VueRouter({
  routes,
  mode: 'history'
})
