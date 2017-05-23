import React from 'react';
import {CommentFormContainer} from '../../containers'

const CommentList = ({comments}) =>
  <div>
    <ul>
      {comments.map((com) => <li>{com.message}</li>)}
    </ul>
  </div>

const ViewArticle = (props) =>
  <div>
    <h3> {props.title} </h3>
    <p> {props.content} </p>
    <CommentFormContainer
      articleId={props.articleId}
      loadArticle={props.loadArticle}
       />
    {
      props.comments && props.comments.length > 0
      ? <CommentList comments={props.comments} />
    : <div><h1>No Comments yet</h1></div>
    }
  </div>

export default ViewArticle;
