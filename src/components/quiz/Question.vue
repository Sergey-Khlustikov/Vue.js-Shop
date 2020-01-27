<template>
    <div class="quiz-question">
      <h3 class="question-title">{{question.title}}</h3>
        <div class="quiz-variants">
          <component
            :is="question.type"
            :answers="question.answers"
            :name="question.title"
            :givenAnswer="givenAnswer"
            @onInput="checkAns"
            :key="currentQuestion"
            :currentQuestion="currentQuestion"
          />
        </div>
      <hr>
    </div>
</template>

<script>
import Checkbox from './Checkbox-Group'
import Radio from './Radio-Group'
import singleSelect from './Select-Group'

export default {
  props: [
    'question',
    'currentQuestion',
    'givenAnswer'
  ],
  components: {
    Checkbox,
    Radio,
    singleSelect
  },
  methods: {
    checkAns (compData) {
      this.$emit('onInput', compData)
    }
  }
}
</script>

<style scoped>
  .question-title {
    padding-left: 25px;
    margin-bottom: 20px;
  }
.quiz-variants {
  padding: 0 30px;
}
</style>
