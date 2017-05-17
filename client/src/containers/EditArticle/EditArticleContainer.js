import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import $ from 'jquery';

import {EditArticle} from '../../components';

class EditArticleContainer extends Component {
  state = {
    title: undefined,
    content: undefined,
    loaded: false
  }

  onFieldChange = this.onFieldChange.bind(this)
  handleSubmit = this.handleSubmit.bind(this)

  componentDidMount = () => this.loadArticle()

  onFieldChange(fieldName, fieldValue){
    const newState = {};
    newState[fieldName] = fieldValue;
    this.setState(newState)
  }

  loadArticle(){
    $.ajax({
      url: `/api/articles/${this.props.params.article_id}`,
      method: 'GET'
    }).done(response => {
      const article = response.data
      this.setState({
        title: article.title,
        content: article.content,
        loaded: true
      })
    })
  }

  handleSubmit(e){
    e.preventDefault();
    const data = {
      title: this.state.title,
      content: this.state.content
    }
    $.ajax({
      url: `/api/articles/${this.props.params.article_id}`,
      method: "PUT",
      data
    }).done((response) => browserHistory.push('/articles'))
  }
  render() {
    return (
      <div>
      {
        this.state.loaded ?
        <EditArticle
          handleSubmit={this.handleSubmit}
          onFieldChange={this.onFieldChange}
          title={this.state.title}
          content={this.state.content}

        /> : null
      }
      </div>
    )
  }
}

export default EditArticleContainer
