import {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

class StateItem extends Component {
  render() {
    const {eachState, updateSearchInput} = this.props
    const stateData = {
      stateCode: eachState.state_code,
      stateName: eachState.state_name,
    }
    const onClickState = () => {
      updateSearchInput(stateData.stateName, stateData.stateCode)
    }
    return (
      <Link
        to={`/state/:${stateData.stateCode.toUpperCase()}`}
        className="link"
      >
        <li className="each-state" onClick={onClickState}>
          <p className="state-name">{stateData.stateName}</p>
          <div className="state-code-dec">
            <p className="state-code">{stateData.stateCode}</p>
            <div className="symbol-border">
              <p className="symbol">&#62;</p>
            </div>
          </div>
        </li>
      </Link>
    )
  }
}
export default StateItem
