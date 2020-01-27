<template>
  <transition name="fade" mode="out-in">
    <template v-if="inCartIds.indexOf(product.id) === -1">
      <button class="btn btn-primary"
              @click="onAddToCart(product.id)"
      >Add to cart
      </button>
    </template>
    <div v-else class="qty d-flex justify-content-center">
      <button class="btn btn-danger" @click="decrement(product.id)">-</button>
      <input class="qty-input" type="text" :value="getProductById(product.id).qty">
      <button class="btn btn-success" @click="increment(product.id)">+</button>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: ['product', 'index'],
  computed: {
    ...mapGetters('cart', {
      inCart: 'products',
      inCartIds: 'inCartIds',
      getProductById: 'getProductById'
    })

  },
  methods: {
    ...mapActions('cart', {
      addToCart: 'add',
      increment: 'increment',
      decrement: 'decrement'
    }),
    onAddToCart (id) {
      this.addToCart(id)
    }
  }
}
</script>

<style scoped>
  .qty-input {
    max-width: 50px;
    text-align: center;
    border: none;
    outline: 0;
    background-color: transparent;
  }
</style>
