import React, { Component } from 'react';
import $ from 'jquery';

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
    }).done(response =>
      this.setState({ articles: response.data}))
  }
  handleDelete(e, id) {
    e.preventDefault();
    $.ajax({
      url: `/api/articles/${id}`,
      method: 'DELETE'
    }).done((data) => this.loadArticles())
  }
  render() {
    const articles = this.state.articles;
    return (
      <div>
        <h3> Welcome To My Articles </h3>
        {
          articles?
            React.cloneElement(this.props.children,
              { articles: articles, handleDelete: this.handleDelete }
            )
          : null
        }
      </div>
    )
  }
}

export default ArticlesContainer;
