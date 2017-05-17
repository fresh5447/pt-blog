import React from 'react';
import {Link} from 'react-router';

const Card = (props) =>
  <div>
    <h3> {props.title} </h3>
    <p> {props.content} </p>
    <button onClick={(event) => props.deleteArticle(event, props._id)} className="btn btn-danger card-btn"> Delete </button>
    <Link to={`/articles/edit/${props._id}`} className="btn btn-warning card-btn"> Edit </Link>
    <Link to={`/articles/view/${props._id}`} className="btn btn-primary card-btn"> View Full Article </Link>
  </div>

export default Card;
