import { Link, useLocation } from "react-router-dom";
import "../App.css";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";

function Signin() {
  return (
    <div className="App">
      <div className="Signup-header">Create an Account</div>
      <div className="App-text">
        <br></br>
        <div>
          <TextField
            sx={{
              input: {
                color: "black",
                background: "white",
              },
            }}
            id="email"
            label="Email"
            variant="filled"
          />
        </div>
        <br></br>
        <div>
          <TextField
            sx={{
              input: {
                color: "black",
                background: "white",
              },
            }}
            id="password"
            label="Password"
            variant="filled"
          />
        </div>
        <br></br>
        <div>
          <TextField
            sx={{
              input: {
                color: "black",
                background: "white",
              },
            }}
            id="name"
            label="Name"
            variant="filled"
          />
        </div>
        <br></br>
        <div>
          <TextField
            sx={{
              input: {
                color: "black",
                background: "white",
              },
            }}
            id="address"
            label="Address"
            variant="filled"
          />
        </div>
        <br></br>

        <Button variant="contained">Login</Button>
        <br></br>
        <br></br>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button variant="text">Don't have an account?</Button>
        </Link>
      </div>
    </div>
  );
}

export default Signin;
