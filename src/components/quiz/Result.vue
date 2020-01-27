<template>
  <div>
    <h2>You made it!</h2>
    <hr>
    <h5 class="pb-2">You did a great job and now we know what phone you should definitely buy - OURS!</h5>
    <h5>So hurry up and buy our the most expensive phone! You are almost out of time!</h5>
    <div class="card text-center">
      <img :src="expensivePhone.img" class="card-img-top" alt="...">
      <div class="card-body">
        <router-link
          :to="'/products/' + expensivePhone.id"
          tag="h3"
        ><a class="card-title">{{expensivePhone.title}}</a>
        </router-link>
        <p class="card-text">{{expensivePhone.price}}</p>
        <product-buy :product="expensivePhone"/>
      </div>
    </div>

    <div class="d-flex">
      <button class="btn btn-success mr-2" @click="showResult = !showResult">{{showResult ? 'Hide' : 'Show me'}} my answers</button>
      <button class="btn btn-danger" @click="startAgain">Start again</button>
    </div>
    <table v-if="showResult" class="table table-bordered mt-3">
      <tbody>
      <tr v-for="(value, index) in givenAnswers" :key="index">
        <th>{{index + 1}}</th>
        <th>{{typeof(value) === "object" ? value.join('; ') : value}}</th>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ProductBuy from '../ProductBuy'
import { mapGetters, mapMutations } from 'vuex'

export default {
  props: [
    'givenAnswers'
  ],
  components: {
    ProductBuy
  },
  data () {
    return {
      showResult: false
    }
  },
  computed: {
    ...mapGetters('products', {
      products: 'items'
    }),
    expensivePhone () {
      const largestNum = Math.max.apply(Math, this.products.map(function (product) {
        return product.price
      }))
      return this.products.find(product => {
        return product.price === largestNum
      })
    }
  },
  methods: {
    ...mapMutations('quiz', {
      startAgain: 'startAgain'
    })
  }
}
</script>

<style scoped>
.card {
  width: 250px;
  margin: 25px auto;
}
</style>
