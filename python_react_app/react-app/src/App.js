import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import ArticleList from './components/ArticleList';
import Form from './components/Form';
import APIService from './APIService'

function App() {
  
  const [articles, setArticles] = useState([])
  const [editArticle, setEditArticle] = useState(null)

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/articles/', {
      'method': 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token 9ea43624a5a7a47f068cd29d3ae000271efac67d' 
      }
    })
    .then(resp => resp.json())
    .then(resp => setArticles(resp))
    .catch(error => console.log(error))
  }, [])
  
  function clicked() {
    alert('class button is clicked')
  }

  const updatedInformation = (article) =>{
    const new_article = articles.map(myarticle =>{
      if(myarticle.id === article.id) {
        return article;
      }
      else {
        return myarticle;
      }
    })

    setArticles(new_article)
  }

  const insertedInformation = (article) => {
    const new_articles = [...articles, article]
    setArticles(new_articles)
  }

  const editArticleValue = (article) => {
    setEditArticle(article)
  }

  const deleteArticleValue = (article) => {
    const new_articles = articles.filter(myarticle => {
      if(myarticle.id === article.id){
        return false
      } 
        return true
    })
    setArticles(new_articles)
  }

  const insertArticle = () => {
    setEditArticle({})
  }

  return (
    <div className="App">
      <h1>Django React app </h1>
      <br />
      <h2> Articles list </h2>
      <button className='btn btn-success' onClick={insertArticle}>Insert Article</button>
      <ArticleList articles = {articles} editArticleValue = {editArticleValue} 
                   deleteArticleValue={deleteArticleValue}/>
      {editArticle ? <Form article={editArticle} updatedInformation={updatedInformation} 
                           insertedInformation={insertedInformation}/> : null }
    </div>
  );
}

export default App;
