<template>
  <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut"
              mode="out-in">
    <div id="quiz" class="quiz-popup" v-show="popupState">
      <button class="close-popup" @click="closePopup">x</button>
      <div class="quiz-popup-content">

          <form @submit.prevent v-if="!testDone">
            <h2>What phone should you buy?</h2>
            <hr>
            <transition
              name="fade"
              mode="out-in"
            >
              <app-question
                :question="questions[currentQuestion]"
                :currentQuestion="currentQuestion"
                :givenAnswer="givenAnswers[currentQuestion]"
                @onInput="processAnswer"
                :key="currentQuestion"
              />
            </transition>
            <div class="test-control-btns">
              <button class="btn btn-primary"
                      :disabled="currentQuestion === 0"
                      @click="prevQuestion">Prev</button>
              <button class="btn btn-primary"
                      v-if="currentQuestion !== questions.length - 1"
                      @click="nextQuestion"
                      :disabled="!checkedAnswers[currentQuestion]"

              >Next</button>
              <button class="btn btn-success"
                      v-else
                      @click="finishTest"
                      :disabled="!checkedAnswers[currentQuestion]"
              >Finish</button>
            </div>
          </form>
          <app-result v-else :givenAnswers="givenAnswers"/>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

import appQuestion from './Question'
import appResult from './Result'
export default {
  components: {
    appQuestion,
    appResult
  },

  computed: {
    ...mapGetters('quiz', {
      questions: 'questions',
      checkedAnswers: 'checkedAnswers',
      givenAnswers: 'givenAnswers',
      currentQuestion: 'currentQuestion',
      testDone: 'testDone',
      lastQuestion: 'lastQuestion',
      popupState: 'popupState'
    })
  },
  methods: {
    ...mapMutations('quiz', {
      nextQuestion: 'nextQuestion',
      prevQuestion: 'prevQuestion',
      processAnswer: 'processAnswer',
      finishTest: 'finishTest',
      closePopup: 'closePopup'
    })
  }
}
</script>

<style>
  .noscroll {
    overflow-y: hidden;
  }
  .quiz-popup{
    width:100%;
    min-height:100%;
    max-height: 100vh;
    background-color: rgba(0,0,0,0.5);
    overflow: auto;
    position:fixed;
    top:0px;
    z-index: 99;
  }
  .quiz-popup .quiz-popup-content{
    margin: 40px auto;
    max-width: 900px;
    height: auto;
    padding:10px;
    background-color: #fff;
    border-radius:5px;
    box-shadow: 0px 0px 10px #000;
    z-index: 100;
  }
  .close-popup {
    position: fixed;
    right: 50px;
    top: 20px;
    font-weight: bold;
    background: none;
    border: none;
    font-size: 24px;
    color: #fff;
    outline: 0;
  }
</style>
