import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import ArticleList from './components/ArticleList';

function App() {
  
  const [articles, setArticles] = useState([])

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


  return (
    <div className="App">
      <h1>Django React app </h1>
      <h2> Articles list </h2>
      <ArticleList articles = {articles}/>
    </div>
  );
}

export default App;
