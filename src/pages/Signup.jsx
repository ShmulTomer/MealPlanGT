import "../App.css";
import React, {useState} from 'react';

function Signin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const isValidEmail = (email) => 
  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);

  const isValidPassword = (password) => 
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(password)

  return (
    <div className="App">
      <div className="Signup-header">Create an Account</div>
      <div className="App-text">
        <input className="Input"
          placeholder="email"
          type="email"
          onChange={e => setEmail(e.target.value)}
        />
        <input className="Input"
          placeholder="password"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />
        <input className="Input"
          placeholder="name"
          onChange={e => setName(e.target.name)}
        />
        <input className="Input"
          placeholder="address"
          onChange={e => setAddress(e.target.name)}
        />
        <button className="Button" onClick={async() => {
          if (!isValidEmail(email)) {
            alert("email is invalid")
          } if (!isValidPassword(password)) {
            alert("password is not strong enough. password must be alphanumeric, contain an uppercase letter, contain special characters, and be at least 8 characters in length.");
          } if (name.length === 0) {
            alert("name cannot be null")
          } if (address.length === 0) {
            alert("address cannot be null")
          } else {
            // navigate to correct page, load information into database
          }
        }}>Login</button>
      </div>
    </div>
  );
}

export default Signin;
