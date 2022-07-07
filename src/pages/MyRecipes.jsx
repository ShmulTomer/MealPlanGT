import "../App.css";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@mui/material";


function MyRecipes() {
  return (
    <div className="App">
      <div className="Login-header">My Recipes</div>
      <div className="App-text">

        <br></br>
        <Link to="/contributor" style={{ textDecoration: "none" }}>
          <Button variant="text">Back</Button>
        </Link>
          
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button variant="text">Log Out</Button>
        </Link>
     </div>
    </div>
  );
}

export default MyRecipes;
