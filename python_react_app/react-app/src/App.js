import logo from './logo.svg';
import './App.css';
// import Name from './components/Name';
// import Example from './components/Example';
// import Form from './components/Form';
import {useState, useEffect} from 'react';

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
      {articles.map(article =>{
        return (
          <div>
            <h2 key={article.id}>{article.title}</h2>
            <p> {article.description} </p>
          </div>)
      })}
    </div>
  );
}

export default App;
