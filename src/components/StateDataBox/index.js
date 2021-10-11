import {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

class StateDataBox extends Component {
  componentDidMount() {
    const {homeData, counting} = this.props
    counting(
      homeData.total.confirmed,
      homeData.total.confirmed - homeData.total.recovered,
      homeData.total.recovered,
      homeData.total.deceased,
    )
  }

  render() {
    const {homeData, each} = this.props

    const stateData = {
      stateCode: each.state_code,
      stateName: each.state_name,
    }

    return (
      <Link
        to={`/state/:${stateData.stateCode.toUpperCase()}`}
        className="link"
      >
        <li className="each-state">
          <div className="column">
            <p className="state-name">{each.state_name} </p>
            <span className="p-column-first2 Confirmed ">
              {Intl.NumberFormat('en-IN').format(homeData.total.confirmed)}
            </span>
            <span className="p-column2 Active">
              {Intl.NumberFormat('en-IN').format(
                homeData.total.confirmed - homeData.total.recovered,
              )}
            </span>
            <span className="p-column2 Recovered">
              {Intl.NumberFormat('en-IN').format(homeData.total.recovered)}
            </span>
            <span className="p-column2 Deceased">
              {' '}
              {Intl.NumberFormat('en-IN').format(homeData.total.deceased)}
            </span>
            <span className="p-column2 Population">
              {Intl.NumberFormat('en-IN').format(homeData.meta.population)}
            </span>
          </div>
        </li>
      </Link>
    )
  }
}
export default StateDataBox
