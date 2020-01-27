import Vue from 'vue'
export default {
  namespaced: true,
  state: {
    questions: [
      {
        type: 'radio',
        title: 'How old are you?',
        answers: [
          '0-35',
          '35-55',
          '55+',
          'typeof (Infinity) = ' + typeof (Infinity)
        ]
      },
      {
        type: 'radio',
        title: 'Do you own a computer?',
        answers: [
          'Nope',
          'Yes',
          'A computer, a laptop, a tablet',
          'What is computer?!'
        ]
      },
      {
        type: 'radio',
        title: 'Are there any activities you like to do on the internet?',
        answers: [
          'Email, music, social media, games, stuff',
          'Checking email and surfing from time to time',
          'What is the internet?!'
        ]
      },
      {
        type: 'radio',
        title: 'Do you have a home phone?',
        answers: [
          'No',
          'Yes',
          'I do not have home'
        ]
      },
      {
        type: 'radio',
        title: 'Do you travel a lot?',
        answers: [
          'Always on the go',
          'Vacations and holidays',
          'A lot. From bed to chair'
        ]
      },
      {
        type: 'radio',
        title: 'Are you a fast learner?',
        answers: [
          'I pick up very quick',
          'Not really',
          'What was the question?'
        ]
      },
      {
        type: 'checkbox',
        title: 'Yes?',
        answers: [
          'Yes!',
          'No',
          'Both',
          'What?',
          'Difficult to answer'
        ]
      },
      {
        type: 'radio',
        title: 'Do you live in a big city or the country?',
        answers: [
          'City',
          'Country',
          'I live in hell'
        ]
      },
      {
        type: 'singleSelect',
        title: 'Check this select field I made!',
        answers: [
          'Wow!',
          'Nice!',
          'Awesome!'
        ]
      }

    ],
    checkedAnswers: [],
    givenAnswers: [],
    currentQuestion: 0,
    testDone: false,
    popupState: false

  },
  getters: {
    questions (state) {
      return state.questions
    },
    checkedAnswers (state) {
      return state.checkedAnswers
    },
    givenAnswers (state) {
      return state.givenAnswers
    },
    currentQuestion (state) {
      return state.currentQuestion
    },
    testDone (state) {
      return state.testDone
    },
    lastQuestion (state) {
      return state.questions.length - 1
    },
    popupState (state) {
      return state.popupState
    }

  },
  mutations: {
    nextQuestion (state) {
      if (state.currentQuestion <= state.questions.length - 2) {
        state.currentQuestion++
      }
    },
    prevQuestion (state) {
      if (state.currentQuestion !== 0) {
        state.currentQuestion--
      }
    },
    processAnswer (state, answerObj) {
      for (let i = 0; i < state.questions.length; i++) {
        Vue.set(state.givenAnswers, state.currentQuestion, answerObj.givenAnswer)
        Vue.set(state.checkedAnswers, state.currentQuestion, answerObj.activated)
      }
    },
    finishTest (state) {
      state.testDone = true
    },
    openPopup (state) {
      state.popupState = true
      document.body.classList.add('noscroll')
    },
    closePopup (state) {
      state.popupState = false
      document.body.classList.remove('noscroll')
    },
    startAgain (state) {
      state.testDone = false
      state.currentQuestion = 0
      state.givenAnswers = []
      state.checkedAnswers = []
    }

  },
  actions: {

  }
}
