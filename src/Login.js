import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = ({ onLogin }) => {
  return (
    <div className='container'>
      <h2>Login</h2>
      <form onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
        <div className='form-group'>
        <label>
          Username:
          <input type="text" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" />
        </label>
        <br />
        <button className='btn btn-secondary' type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
