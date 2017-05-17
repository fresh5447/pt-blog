import React from 'react';
import ReactDOM from 'react-dom';
import {Router,
        Route,
        browserHistory,
        IndexRoute}
        from 'react-router'

require('bootstrap/dist/css/bootstrap.css')

import App from './App';
import {HomeContainer, AboutContainer,
        ArticlesContainer, PostArticleContainer,
        EditArticleContainer, ViewArticleContainer
  } from './containers'


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomeContainer} />
      <Route path="/home" component={HomeContainer} />
      <Route path="/about" component={AboutContainer} />
      <Route path="/articles" component={ArticlesContainer} />
      <Route path="/articles/post" component={PostArticleContainer}/>
      <Route path="/articles/edit/:article_id" component={EditArticleContainer}/>
      <Route path="/articles/view/:article_id" component={ViewArticleContainer}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
