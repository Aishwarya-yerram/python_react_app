import React, {useState, useEffect} from 'react';
import APIService from '../APIService';
import {useCookies} from 'react-cookie';
import {useNavigate} from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useCookies(['mytoken'])
  let navigate = useNavigate()

  useEffect(() => {
    if(token['mytoken']) {
      navigate('/articles');
    }
  }, [token])

  const loginBtn = () => {
    APIService.LoginUser({username, password})
    .then(resp => setToken('mytoken', resp.token))
    .catch(error => console.log(error))
  }
  return (
    <div className="App">
      <br/>
      <br/>
      <h1 text-align="inherit"> Please Login </h1>
      <div className="mb-3">
        <label htmlfor = "username" className = "form-label">UserName</label>
        <br/>
        <input type = "text" className = "form-control" id="username"
               placeholder="please enter username" value={username} 
               onChange={e => setUsername(e.target.value)}/>      
      </div>

      <div className="mb-3">
        <label htmlfor = "password" className = "form-label">Password</label>
        <br/>
        <input type = "password" className = "form-control" id="password"
               placeholder="please enter password" value={password} 
               onChange={e => setPassword(e.target.value)}/>      
      </div>
      <br/>
      <button onClick={loginBtn} className = "btn btn-primary">Login</button>
    </div>
  )
}

export default Login;