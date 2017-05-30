import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import $ from 'jquery';

import CategoriesSelector from './CategorySelector'

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};


import {PostArticle} from '../../components';

class PostArticleContainer extends Component {
  state = {
    title: undefined,
    content: undefined,
    categories: [],
    allCategories: undefined,
    createCategory: undefined
  }

  onFieldChange = this.onFieldChange.bind(this)
  handleSubmit = this.handleSubmit.bind(this)
  addCategory = this.addCategory.bind(this);
  removeCategory = this.removeCategory.bind(this);
  submitCategory = this.submitCategory.bind(this);

  componentWillMount = () => this.loadCategories()

  onFieldChange(fieldName, fieldValue){
    const newState = {};
    newState[fieldName] = fieldValue;
    this.setState(newState)
  }

  loadCategories() {
    $.ajax({
      url: '/api/categories',
      method: 'GET',
    }).done((response) => {
      console.log(response.data, 'RESPONSE IN LOAD CATEGORIES')
      this.setState({ allCategories: response.data });
    });
  }

  addCategory(cat){
    const newState = this.state.categories;
    newState.push(cat);
    this.setState({ categories: newState })
  }
  removeCategory(cat){
    const newState = this.state.categories;
    newState.remove(cat);
    this.setState({ categories: newState })
  }


  submitCategory(e){
    e.preventDefault();
    const data = { name: this.state.createCategory };
    $.ajax({
      url: `/api/categories`,
      method: 'POST',
      data
    }).done((d) => {
      this.loadCategories();
    });
  }

  handleSubmit(e){
    e.preventDefault();
    const catIds = this.state.categories.map(item => item._id);
    const data = {
      title: this.state.title,
      content: this.state.content,
      categories: catIds
    }
    console.log(data, "BEFORE AJAX")
    $.ajax({
      url: "/api/articles",
      method: "POST",
      data
    }).done((response) => {
      console.log(response, "INSIDE AJAX")
      browserHistory.push('/articles')
    })
  }
  render() {
    return (
      <div>
        <PostArticle
          handleSubmit={this.handleSubmit}
          onFieldChange={this.onFieldChange}
        />
      {
        this.state.allCategories
        ? <CategoriesSelector
            onFieldChange={this.onFieldChange}
            addCategory={this.addCategory}
            submitCategory={this.submitCategory}
            allCategories={this.state.allCategories}
            categories={this.state.categories}
            removeCategory={this.removeCategory}
          />
        : null
      }
      </div>
    )
  }
}

export default PostArticleContainer
