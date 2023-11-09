import React, { useState } from "react";
import './Registration.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const regExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zAZ0-9-]+)*$/;
  const pattern = /^\d{1,10}$/;

  const namehandle = (e) => {
    setName(e.target.value);
  }

  const emailhandle = (e) => {
    let email = e.target.value;
    if (!email.match(regExp)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    setEmail(email);
  }

  const numhandle = (e) => {
    let phone = e.target.value;
    if (!phone.match(pattern)) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
    setPhone(phone);
  }

  const passwordhandle = (e) => {
    let password = e.target.value;
    if (password.length < 5) { 
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    setPassword(password);
  }

  const registerhandle = (e) => {
    e.preventDefault();

    // if any field is empty or has an error
    if (!name || !email || emailError || !phone || phoneError || !password || passwordError) {
      alert('Please fill in all the required fields correctly.');
      return;
    }

    //  form submission logic 
    alert('Form submitted successfully');
  }

  return (
    <div className="form container col-6 text-center mt-5">
      <form onSubmit={registerhandle}>
        <label style={{ fontWeight: '600' }}>Please Register Here</label>
        <br /><br />
        <label> Name : </label>
        <input type="text" placeholder="Enter name" onChange={namehandle} />
        <br /><br />
        <label> Email Id: </label>
        <input type="text" placeholder="Enter Email id" onChange={emailhandle} />
        <br />
        {emailError ? <span style={{ color: 'red' }}>Email is Invalid</span> : " "}
        <br />
        <label> Phone : </label>
        <input type="text" placeholder="Enter Mobile number" onChange={numhandle} />
        <br />
        {phoneError ? <span style={{ color: 'red' }}>Invalid number</span> : " "}
        <br />
        <label> Address : </label>
        <input type="text" placeholder="Enter Address" required />
        <br /><br />
        <label> Password : </label>
        <input type="password" placeholder="Enter password" required onChange={passwordhandle} />
        <br />
        {passwordError ? <span style={{ color: 'red' }}>Password must contain at least 5 characters</span> : ""}
        <br />
        <button type="submit" className="btn btn-success" >Register</button>
      </form>
    </div>
  );
}

export default Registration;
