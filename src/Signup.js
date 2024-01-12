import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = ({ onSignup }) => {
  return (
    <div className='container'>
      <h2>Signup</h2>
      <form onSubmit={(e) => { e.preventDefault(); onSignup(); }}>
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
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;