import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/action-creators'

function Quiz(props) {
  console.log(props)
  useEffect(() => {
    props.fetchQuiz()
  }, [])

  const [answer1, setAnswer1] = useState(null) 
  const [answer2, setAnswer2] = useState(null) 

  const choice1 = () => {
    props.selectAnswer(props.quiz.answers[0].text)
    setAnswer1(true)
    setAnswer2(false)
  }
  const choice2 = () => {
    props.selectAnswer(props.quiz.answers[1].text)
    setAnswer2(true)
    setAnswer1(false)
  }

  const submitAnswer = () => {
    const quizid = props.quiz.quiz_id
    if(answer1 === null || answer2 === null) {
      return null
    } else if(answer1 === true) {
      props.postAnswer(props.quiz.answers[0].answer_id, quizid)
      props.fetchQuiz()
    } else {
      props.postAnswer(props.quiz.answers[1].answer_id, quizid)
      props.fetchQuiz()
    }
    // answer1 === true ? props.postAnswer(answer1) : 
  }


  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        props.quiz
         ? (
          <>
            <h2>{props.quiz.question}</h2>

            <div id="quizAnswers">
              <div className={`answer${answer1 ? ' selected' : ''}`}>
                {props.quiz.answers[0].text}
                <button onClick={() => choice1()}>
                  {answer1 === true || answer2 === false ? 'SELECTED' : 'Select'}
                </button>
              </div>

              <div className={`answer${answer2 ? ' selected' : ''}`}>
              {props.quiz.answers[1].text}
                <button onClick={() => choice2()}>
                  {answer2 === true || answer1 === false ? 'SELECTED' : 'Select'}
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" onClick={() => submitAnswer()} disabled={answer1 === null || answer2 === null ? true : false}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

export default connect(st => st, actions)(Quiz)
