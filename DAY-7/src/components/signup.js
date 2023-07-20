import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';



const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '110vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'black',
    height: '100vh',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '40%',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: 'white',
    height: '100vh'
  },
  input:  {
    marginBottom: '10px',
    padding: '10px',
    fontSize: '16px',
    width: '50%',
  },
  
  button: {
    padding: '5px',
    width:'100%',
    height:'90%',
    alignItems: 'center',
    fontSize: '16px',
    backgroundColor: '#594f8d',
    color: 'black',
    border: 'none',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  },
  
};

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [username, setUserName] = useState('');

  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your signup logic here
    if (password === confirmPassword) {
      // Successful signup, navigate to login page
      setError('');
      setEmail('');
      setName('');
      setUserName('');
      setAge('');
      setGender('');
      setState('');
      setCountry('');
      setPassword('');
      setConfirmPassword('');
      alert('Signup successful!');
      navigate('/Home')
    } else {
      // Passwords do not match, display error message
      setError('Passwords do not match');
    }
  };

  return (
    
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
      <img style={{marginRight: '350px',width:'25%'}}src="https://cdn-icons-png.flaticon.com/128/11161/11161962.png"/>
        <h2><center> REGISTER </center></h2>
        <br></br>
        <br></br>
        {error && <p style={styles.error}>{error}</p>}

        <input
          style={styles.input}
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          style={styles.input}
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <input
          style={styles.input}
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />

<input
          style={styles.input}
          type="text"
          placeholder="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        />
        
        <input
          style={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          style={styles.input}
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <input
          style={styles.input}
          type="text"
          placeholder="State"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />
        <input
          style={styles.input}
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
      <br></br>
      <center>
        <button style={styles.button} type="submit">Signup</button></center>
        
        <center>
        <p><b>Already a member?</b> <Link to="/Login">Login</Link></p></center>
      </form>
    </div>
  );
}

export default Signup;