import React from 'react'
import * as actions from '../state/action-creators'
import { connect } from 'react-redux'

function Message(props) {
  return <div id="message">{props.infoMessage}</div>
}

export default connect(st => st, actions)(Message)