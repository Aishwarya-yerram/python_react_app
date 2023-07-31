import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import MyClass from './components/MyClass';

function App() {
  
  function clicked() {
    alert('class button is clicked')
  }


  return (
    <div className="App">
      <Hello name="aish"/>
      <MyClass email="axyerram@gmail.com" myclick={clicked}/>
    </div>
  );
}

export default App;
