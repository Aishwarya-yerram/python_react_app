import React from 'react';
import APIService from '../APIService';

function ArticleList(props) {

	const editArticleValue = (article) => {
		props.editArticleValue(article)
	}

	const deleteArticleValue = (article) => {
		APIService.DeleteArticle(article.id)
		.then(() => props.deleteArticleValue(article))
	}

	return (
		<div>
			{props.articles.map(article =>{
        	return (
          	<div key={article.id}>
          		<br/>
          		<br/>
            	<h2 >{article.title}</h2>
            	<p> {article.description} </p>

            	<div className="row">
	            	<div className="col-md-1">
		            	<button onClick={() => editArticleValue(article)}className="btn btn-primary"> Update </button>
		            </div>
		            <div className="col-md-1">
		            	<button onClick = {() => deleteArticleValue(article)} className="btn btn-danger"> Delete </button>
		            </div>
            	</div>
            	<hr/>
          	</div>)
      	})}
		</div>
	)
}

export default ArticleList;