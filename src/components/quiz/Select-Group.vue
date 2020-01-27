<template>
  <div class="form-group">
    <select v-model="picked" @change="onInput" class="custom-select">
      <option v-for="(answer, index) in answers"
              :key="index" :value="answer">{{answer}}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Select-Group',
  props: {
    answers: [Array, String],
    name: String,
    givenAnswer: [Array, String]
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
select {
  width: 100%;
}
</style>
