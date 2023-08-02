import logo from './logo.svg';
import './App.css';
import Name from './components/Name';
import Example from './components/Example';
import Form from './components/Form';

function App() {
  
  function clicked() {
    alert('class button is clicked')
  }


  return (
    <div className="container">
    <Name />
    <Example names={['ruby', 'python']}/>
    <Form />
    </div>
  );
}

export default App;
