import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import ArticleList from './components/ArticleList';
import Form from './components/Form';
import APIService from './APIService';
import {useCookies} from 'react-cookie';
import {useNavigate} from 'react-router-dom';

function App() {
  
  const [articles, setArticles] = useState([])
  const [editArticle, setEditArticle] = useState(null)
  const [token, removeToken] = useCookies(['mytoken'])
  let navigate = useNavigate()

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/articles/', {
      'method': 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token['mytoken']}`
      }
    })
    .then(resp => resp.json())
    .then(resp => setArticles(resp))
    .catch(error => console.log(error))
  }, [])
  

  useEffect(() => {
    if(token['mytoken']) {
      navigate('/auth');
    }
  }, [token])


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

  const logoutBtn = () => {
    removeToken(['mytoken'])

  }

  return (
    <div className="App">
      <h1>Django React app </h1>
      <br />
      <h2> Articles list </h2>
      <button className='btn btn-success' onClick={insertArticle}>Insert Article</button>
      <button className='btn btn-primary' onClick={logoutBtn}>Logout</button>
      <ArticleList articles = {articles} editArticleValue = {editArticleValue} 
                   deleteArticleValue={deleteArticleValue}/>
      {editArticle ? <Form article={editArticle} updatedInformation={updatedInformation} 
                           insertedInformation={insertedInformation}/> : null }
    </div>
  );
}

export default App;
