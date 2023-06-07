import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log('Login submitted');
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className='a1'>LOGIN</h2>
        <div className="form-group">
          <label>Email:</label>
          <input className="animated-input"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
            
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit" >Login</button>
      </form>
    </div>
  );
};

export default Login;