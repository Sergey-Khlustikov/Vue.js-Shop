<template>
    <div>
      <h2>Your order is done!<br>Thank you for shopping!</h2>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('checkout', {
      formSend: 'formSend'
    })
  },
  mounted () {
    if (this.formSend) {
      this.$store.dispatch('cart/clearCart')
    }
  }
}
</script>
