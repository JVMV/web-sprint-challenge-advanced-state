import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/action-creators'


function Wheel(props) {
  const clockwise = () => {
    if(props.wheel === 5) {
      props.loopWheelZero()
    } else {
      props.moveClockwise()
    }
  }
  const cClockwise = () => {
    if(props.wheel === 0) {
      props.loopWheelFive()
    } else {
      props.moveCounterClockwise()
    }
  }

  return (
    <div id="wrapper">
      <div id="wheel">
        {/* Added an array that is mapped to the original coded divs layout. */}
        {
          [0, 1, 2, 3, 4, 5].map(idx => (
            <div key={idx} className={`cog${idx === props.wheel ? ' active' : ''}`} style={{ "--i": idx }}>
              {idx === props.wheel ? 'B' : ''}
            </div>
          ))
        }
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={() => cClockwise()}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={() => clockwise()}>Clockwise</button>
      </div>
    </div>
  )
}

export default connect(st => st, actions)(Wheel)

//OLD CODE
{/* <div key={0} className="cog active" style={{ "--i": 0 }}>B</div>
<div key={1} className="cog" style={{ "--i": 1 }}></div>
<div key={2} className="cog" style={{ "--i": 2 }}></div>
<div key={3} className="cog" style={{ "--i": 3 }}></div>
<div key={4} className="cog" style={{ "--i": 4 }}></div>
<div key={5} className="cog" style={{ "--i": 5 }}></div> */}
{/* --i is a custom CSS property, no need to touch that nor the style object */}