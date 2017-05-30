import React, {Component} from 'react';

class GetUser extends Component {
  getChildContext() {
    return {
      color: "purple",
      user: function(){
        return { name: "Doug" }
      }
    };
  }

  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}

GetUser.childContextTypes = {
  color: React.PropTypes.string,
  user: React.PropTypes.function
}

export default GetUser;
