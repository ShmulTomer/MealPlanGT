import "../App.css";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@mui/material";


function Contributor() {
  return (
    <div className="App">
      <div className="Login-header">Contributor Home</div>
      <div className="App-text">

        
          <div className="home-buttons">
            
          <Link to="/writerecipe" style={{ textDecoration: "none" }}>
            <Button variant="contained">Write Recipe</Button>
        </Link>
        <br></br>
        <br></br>
        <Link to="/browse" style={{ textDecoration: "none" }}>
            <Button variant="contained">Browse Recipes</Button>
        </Link>
        <br></br>
        <br></br>
        <Link to="/myrecipes" style={{ textDecoration: "none" }}>
            <Button variant="contained">See my Recipes</Button>
        </Link>


          </div>
          <br></br>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <Button variant="text">Back</Button>
        </Link>
          
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button variant="text">Log Out</Button>
        </Link>
        
     </div>
    </div>
  );
}

export default Contributor;
