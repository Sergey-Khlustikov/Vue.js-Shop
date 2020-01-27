<template>
  <div>
    <img :src="product.img" alt="">
    <div class="d-flex justify-content-between align-items-center">
      <h1>{{product.title}}</h1>
      <div class="alert alert-success">
        {{product.price}}
      </div>
    </div>
    <p>{{product.description}}</p>
    <product-buy class="d-block m-auto" :product="product"/>
    <router-link :to="{name: 'products'}">Return to shop</router-link>
    <hr>
  </div>
</template>

<script>
import ProductBuy from './ProductBuy'
export default {
  components: {
    ProductBuy
  },
  created () {
    this.axios.get('/products/' + this.id)
      .then(response => {
        this.product = response.data[0]
      })
      .catch(error => {
        console.log('-----error------')
        console.log(error)
      })
  },
  data () {
    return {
      product: []
    }
  },
  computed: {
    id () {
      return this.$route.params.id
    }
  }
}
</script>
