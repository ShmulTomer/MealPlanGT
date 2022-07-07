
import { Link, useLocation } from "react-router-dom";
import '../App.css';
import { Button } from "@mui/material";

function Signin() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Sign Up
        </p>
       
        <Link to="/" style={{ textDecoration: "none" }}>
        <Button variant="outlined">Already have an account?</Button>
       </Link>
       
       
      </header>
    </div>
  );
}

export default Signin;
