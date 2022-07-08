import "../App.css";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import React, {useState} from 'react';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <div className="Login-header">Welcome to Food Bites</div>
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

        <Link to="/home" style={{ textDecoration: "none" }}>
            <button className="Button" onClick={async () => {
              // verify username and password matches with database
            }}>Login</button>
        </Link>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <Button variant="text">Don't have an account?</Button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
