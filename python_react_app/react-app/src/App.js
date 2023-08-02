import logo from './logo.svg';
import './App.css';
import Name from './components/Name'

function App() {
  
  function clicked() {
    alert('class button is clicked')
  }


  return (
    <div className="container">
    <Name />
    </div>
  );
}

export default App;
