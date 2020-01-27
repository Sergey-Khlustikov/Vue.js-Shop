
import { router } from '../../routes'
export default {
  namespaced: true,
  state: {
    info: [
      {
        name: 'Name',
        value: '',
        pattern: /[^a-zа-яё ]/iu,
        validated: false
      },
      {
        name: 'Phone',
        value: '',
        pattern: /^[0-9]{7,14}$/,
        validated: false
      },
      {
        name: 'Email',
        value: '',
        // eslint-disable-next-line no-useless-escape
        pattern: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
        validated: false
      },
      {
        name: 'Address',
        value: '',
        pattern: /.+/,
        validated: false
      },
      {
        name: 'Delivery',
        value: '',
        pattern: /.+/,
        validated: false
      }
    ],
    formProcessing: false,
    formSend: false
  },
  getters: {
    info (state) {
      return state.info
    },
    done (state) {
      let done = 0
      for (let i = 0; i < state.info.length; i++) {
        if (state.info[i].validated) {
          done++
        }
      }
      return done
    },
    userName (state) {
      return state.info[0].validated ? state.info[0].value : ''
    },
    formProcessing (state) {
      return state.formProcessing
    },
    formSend (state) {
      return state.formSend
    }
  },
  mutations: {
    input (state, payload) {
      state.info[payload.i].value = payload.inputControls.value
      state.info[payload.i].validated = payload.inputControls.valid
    },
    sendingForm (state) {
      state.formProcessing = true
    },

    formSend (state) {
      state.formProcessing = false
      state.formSend = true
      router.push('checkout/success')
    }
  },
  actions: {
    onFormSend (store, payload) {
      store.commit('sendingForm')
      setTimeout(() => {
        store.commit('formSend')
      }, 1000)
    }
  }
}
