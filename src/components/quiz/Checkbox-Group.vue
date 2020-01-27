<template>
  <div>
    <div class="custom-control custom-checkbox"
         v-for="(answer, index) in answers"
         :key="index"
    >
        <input type="checkbox" class="form-check-input custom-control-input" :id="index" :name="name" :value="answer" v-model="picked" @change="onInput">
      <label :for="index" class="custom-control-label">{{answer}}</label>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Checkbox-Group',
  props: {
    answers: [Array, String],
    name: String,
    givenAnswer: Array
  },

  beforeMount () {
    if (this.givenAnswer !== undefined) {
      this.picked.push(...this.givenAnswer)
    }
  },
  data () {
    return {
      picked: []
    }
  },
  methods: {
    onInput () {
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
