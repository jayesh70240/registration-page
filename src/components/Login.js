import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const regExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const passwordHandle = (e) => {
    let password = e.target.value;
    if (password.length < 4) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    setPassword(password);
  }

  const handleEmail = (e) => {
    let email = e.target.value;
    if (!email.match(regExp)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    setEmail(email);
  }

  function loginhandle(e) {
    e.preventDefault();

    // Check if either field is empty or has an error
    if (!email || emailError || !password || passwordError) {
      alert('Please fill in both fields correctly.');
      return;
    }

    // Your login logic here
    alert("Successfully Login");

    // Clear the fields after successful login (if needed)
    setEmail('');
    setPassword('');
  }

  return (
    <div className="container col-5 text-center mt-5">
      <form onSubmit={loginhandle} className="border  border-2 pt-4 bg-primary">
        <label style={{ fontWeight: '600' }}>Please Login Here</label>
        <br /><br />
        <label> Email  Id : </label>
        <input type="text" placeholder="Enter email" onChange={handleEmail} />
        <br />
        {emailError ? <span style={{ color: 'red' }}>Email is Invalid</span> : ""}
        <br />
        <label> Password : </label>
        <input type="password" placeholder="Enter password" onChange={passwordHandle} />
        <br />
        {passwordError ? <span style={{ color: 'red' }}>Password should contain at least 4 characters</span> : ""}
        <br />
        <button type="submit" className="btn">Login</button>
      </form>
    </div>
  )
}

export default Login;
