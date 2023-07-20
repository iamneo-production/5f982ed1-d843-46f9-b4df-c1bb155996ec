import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { setEmail, setPass, setName } from './action';
import './login.css';

function Login({
  email,
  pass,
  
  name,
  setEmail,
  setName,
  setPass,
  
}) {
  const check = (e) => {
    e.preventDefault();
    if (pass === 'agalya') {
      setCheckPass(true);
    }
  };
  const navigate=useNavigate();
  const[checkpass,setCheckPass]=useState(false);
  return (
    <>
    <div className="logmain">
      <div className="login">
        <form onSubmit={check}>
        <img style={{marginRight: '10px',width:'15%'}}src="https://cdn-icons-png.flaticon.com/128/11161/11161962.png"/>

          <label style={{fontSize:'30px'}} htmlFor="chk" aria-hidden="true">
            Login
          </label>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Username"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="pass"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Password"
            required
          /><br></br>
          <button className="logbut">Login</button>
          <br></br>
          {checkpass && alert('successful login '+name)}

          {checkpass && navigate('/home')}
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <h4 style={{color: 'black'}}>Don't have an account?  Register </h4>
            
          </Link>
        </form>
      </div>
    </div>
  </>
  );
}

const mapStateToProps = (state) => {
  return {
    email: state.login.email,
    pass: state.login.pass,
    name:state.login.name,
    
  };
};

const mapDispatchToProps = {
  setEmail,
  setPass,
  setName,
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);