<template>
  <form @submit.prevent="onFormSend">

    <div class="progress mb-3">
      <div class="progress-bar" :style="progressBar"></div>
    </div>
    <div>

      <checkout-input v-for="(el, index) in info"
                 :key="index"
                 :name="el.name"
                 :value="el.value"
                 :pattern="el.pattern"
                 @input="onInput(index, $event)"
      >
      </checkout-input>

    </div>
      <input type="submit" class="btn btn-primary"
             :disabled="done < info.length"
             :value="formProcessing ? 'Sending' : 'Send Data'">

  </form>
</template>

<script>
import CheckoutInput from './CheckoutInput'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'AppForm',
  components: {
    CheckoutInput

  },
  computed: {
    ...mapGetters('checkout', [
      'info',
      'done',
      'formProcessing'
    ]),

    ...mapGetters('cart', {
      productsInCart: 'products'
    }),

    progressBar () {
      return {
        width: (this.done / this.info.length) * 100 + '%'
      }
    }
  },
  methods: {
    ...mapActions('checkout', {
      sendOrder: 'onFormSend'
    }),
    onInput (index, data) {
      this.$store.commit('checkout/input', {
        i: index,
        inputControls: data
      })
    },
    onFormSend () {
      this.sendOrder({
        order: this.productsInCart
      })
    }
  }

}
</script>

<style scoped>

</style>
