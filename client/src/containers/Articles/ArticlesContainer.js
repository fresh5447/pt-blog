import React, { Component } from 'react';
import $ from 'jquery';
import {Articles} from '../../components'

class ArticlesContainer extends Component {
  state = {
    articles: undefined
  }
  componentDidMount = () => this.loadArticles();

  handleDelete = this.handleDelete.bind(this);

  loadArticles(){
    $.ajax({
      url: '/api/articles',
      method: 'GET'
    }).done(response =>{
      console.log(response)
      this.setState({ articles: response.data})
    })
  }
  handleDelete(e, id) {
    e.preventDefault();
    $.ajax({
      url: `/api/articles/${id}`,
      method: 'DELETE'
    }).done((data) => this.loadArticles())
  }
  render() {
    return (
      <div>
        <h3> Welcome To My Articles </h3>
        { this.state.articles
        ? <Articles articles={this.state.articles} handleDelete={this.handleDelete}/>
        : null}
      </div>
    )
  }
}

export default ArticlesContainer;
