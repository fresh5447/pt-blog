import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import $ from 'jquery';

import {ViewArticle} from '../../components';

class ViewArticleContainer extends Component {
  state = {
    title: undefined,
    content: undefined,
    articleId: undefined,
    comments: undefined,
    loaded: false
  }

  loadArticle = this.loadArticle.bind(this);

  componentDidMount = () => this.loadArticle()

  loadArticle(){
    $.ajax({
      url: `/api/articles/${this.props.params.article_id}`,
      method: 'GET'
    }).done(response => {
      const article = response.data
      this.setState({
        title: article.title,
        content: article.content,
        articleId: article._id,
        comments: article.comments,
        loaded: true
      })
    })
}


  render() {
    return (
      <div>
      {
        this.state.loaded ?
        <ViewArticle
          title={this.state.title}
          content={this.state.content}
          articleId={this.state.articleId}
          comments={this.state.comments}
          loadArticle={this.loadArticle}
        /> : null
      }
      </div>
    )
  }
}



export default ViewArticleContainer
