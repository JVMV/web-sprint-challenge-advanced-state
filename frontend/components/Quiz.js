import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/action-creators'

function Quiz(props) {
  useEffect(() => {
    props.fetchQuiz()
  }, [])

  const [answer1, setAnswer1] = useState('Select') 
  const [answer2, setAnswer2] = useState('Select') 

  const choice1 = () => {
    setAnswer1('SELECTED')
    setAnswer2('Select')
  }
  const choice2 = () => {
    setAnswer2('SELECTED')
    setAnswer1('Select')
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
              <div className="answer selected">
                {props.quiz.answers[0].text}
                <button onClick={() => choice1()}>
                  {answer1}
                </button>
              </div>

              <div className="answer">
              {props.quiz.answers[1].text}
                <button onClick={() => choice2()}>
                  {answer2}
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

export default connect(st => st, actions)(Quiz)
