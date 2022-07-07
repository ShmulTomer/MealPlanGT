
import '../App.css';
import { Link, useLocation } from "react-router-dom";
import { Button } from '@mui/material';
import { TextField } from '@mui/material';

function Login() {
  return (
    <div className="App">
        <div className="Login-header">
        Welcome to Food Bites
        </div>
        <div className="App-text">
        
        <br></br>
        <div>
        <TextField sx={{
              input: {
                color: "black",
                background: "white",
              },
            }} id="email" label="Email" variant="filled" />
        </div>
        <br></br>
        <div>
        <TextField sx={{
              input: {
                color: "black",
                background: "white",
              },
            }}  id="password" label="Password" variant="filled" />
        </div>
        <br></br>

        <Button variant="contained">Login</Button>
        <br></br>
        <br></br>
        <Link to="/signup" style={{ textDecoration: "none" }}>
            <Button variant="text">Don't have an account?</Button>
        </Link>
        </div>
    </div>
  );
}

export default Login;
