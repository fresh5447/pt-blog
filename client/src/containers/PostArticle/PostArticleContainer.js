import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import $ from 'jquery';

import PostArticle from '../../components';

class PostArticleContainer extends Component {
  state = {
    title: undefined,
    content: undefined
  }

  onFieldChange = this.onFieldChange.bind(this)
  handleSubmit = this.handleSubmit.bind(this)

  onFieldChange(fieldName, fieldValue){
    const newState = {};
    newState[fieldName] = fieldValue;
    this.setState(newState)
  }

  handleSubmit(e){
    e.preventDefault();
    const data = {
      title: this.state.title,
      content: this.state.content
    }
    $.ajax({
      url: "/api/articles",
      method: "POST",
      data
    }).done((response) => browserHistory.push('/articles/all'))
  }
  render() {
    return (
      <div>
        <PostArticle
          handleSubmit={this.handleSubmit}
          onFieldChange={this.onFieldChange}
        />
      </div>
    )
  }
}

export default PostArticleContainer
