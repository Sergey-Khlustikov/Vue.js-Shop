import Vue from 'vue'
import App from './App.vue'
import { store } from './store'
import { router } from './routes'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
axios.defaults.baseURL = 'https://shop.sh-it.ru/api/v1'

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  store: store,
  router: router,
  render: h => h(App)
})
