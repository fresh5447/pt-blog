import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import $ from 'jquery';

import ArticleView from './ArticleView';

class ViewArticleContainer extends Component {
  state = {
    title: undefined,
    content: undefined,
    loaded: false
  }

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
        loaded: true
      })
    })
  }


  render() {
    return (
      <div>
      {
        this.state.loaded ?
        <ArticleView
          title={this.state.title}
          content={this.state.content}

        /> : null
      }
      </div>
    )
  }
}

export default ViewArticleContainer
