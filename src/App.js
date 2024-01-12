import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Signup from './Signup';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isLoginVisible, setLoginVisible] = useState(true);

  const handleLogin = () => {
    alert('Login logic goes here');
  };

  const handleSignup = () => {
    alert('Signup logic goes here');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Roommates</h1>
        {isLoginVisible ? (
          <Login onLogin={handleLogin} />
        ) : (
          <Signup onSignup={handleSignup} />
        )}
        <div className='container'>
          <button className='btn btn-primary' onClick={() => setLoginVisible(true)}>Login</button>
          <button className='btn btn-danger' onClick={() => setLoginVisible(false)}>Signup</button>
        </div>
      </header>
    </div>
  );
}

export default App;

