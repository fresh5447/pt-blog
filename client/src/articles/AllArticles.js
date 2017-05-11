import React from 'react';
import ArticleCard from './ArticleCard';

const AllArticles = (props) => {
  console.log(props.handleDelete, "PROPS ARTILCES")
  return(
    <div>
      { props.articles.map((item, index) => {
        return <ArticleCard {...item} key={index} deleteArticle={props.handleDelete} />
      }) }
    </div>
  )
}
export default AllArticles;
