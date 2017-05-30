import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {Home} from '../../components'

class HomeContainer extends Component {
  render() {
    console.log(this.context.user(), "SESSION USER")
    return (
      <div style={{'backgroundColor': this.context.color}}>
        <Home />
      </div>
    )
  }
}

HomeContainer.contextTypes ={
  color: PropTypes.string,
  user: PropTypes.function
};
export default HomeContainer
