<template>
 <div>
   <div class="form-group custom-control custom-radio"
        v-for="(answer, index) in answers"
        :key="index"
   >
     <input type="radio" class="form-check-input custom-control-input" :id="index"  :name="name" :value="answer" v-model="picked" @change="onInput">
     <label class="custom-control-label" :for="index">{{answer}}</label>
   </div>
 </div>
</template>

<script>
export default {
  name: 'Radio-Group',
  props: [
    'answers',
    'name',
    'givenAnswer'
  ],

  data () {
    return {
      picked: this.givenAnswer
    }
  },
  methods: {
    onInput () {
      // this.picked = e.target.value;
      this.$emit('onInput', {
        givenAnswer: this.picked,
        activated: this.picked.length > 0
      })
    }
  }
}
</script>

<style scoped>

</style>
