import React from 'react';
import Card from './Card';

const Articles = (props) => {
  return(
    <div>
      { props.articles.map((item, index) => {
        return <Card {...item} key={index} deleteArticle={props.handleDelete} />
      }) }
    </div>
  )
}
export default Articles;
