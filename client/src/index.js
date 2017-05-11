import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import './index.css';

import App from './App';
import Home from './home/HomeContainer';
import About from './about/AboutContainer';
import Articles from './articles/ArticlesContainer';
import AllArticles from './articles/AllArticles';
import PostArticle from './articles/PostArticleContainer';
import EditArticle from './articles/EditArticleContainer';
import ViewArticleContainer from './articles/ViewArticleContainer';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/articles" component={Articles}>
        <IndexRoute component={AllArticles} />
        <Route path="all" component={AllArticles}/>
      </Route>
      <Route path="/articles/post" component={PostArticle}/>
      <Route path="/articles/edit/:article_id" component={EditArticle}/>
      <Route path="/articles/view/:article_id" component={ViewArticleContainer}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
