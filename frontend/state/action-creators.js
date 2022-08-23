import axios from 'axios'
import * as types from './action-types';

// ❗ You don't need to add extra action creators to achieve MVP
export function moveClockwise() {
  return {type: types.MOVE_CLOCKWISE}
 }

export function moveCounterClockwise() {
  return {type: types.MOVE_COUNTERCLOCKWISE}
 }
export function loopWheelZero() {
  return {type: types.LOOP_ZERO}
}
export function loopWheelFive() {
  return {type: types.LOOP_FIVE}
}
export function selectAnswer() { }

export function setMessage() { }

export function setQuiz(quizData) { 
  return {type: types.SET_QUIZ_INTO_STATE, payload: quizData}
}

export function inputChange() { }

export function resetForm() { }

// ❗ Async action creators
const URL = 'http://localhost:9000/api/quiz/'

export function fetchQuiz() {
  return function (dispatch) {
    axios.get(URL + 'next')
      .then(res => {
        dispatch(setQuiz(res.data))
      })
      .catch(err => {
        console.log(err)
      })
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  }
}
export function postAnswer() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
