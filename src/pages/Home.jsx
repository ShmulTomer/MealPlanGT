import "../App.css";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@mui/material";


function Home() {
  return (
    <div className="App">
      <div className="Login-header">Home Selection</div>
      <div className="App-text">

        
          <div className="home-buttons">
            
          <Link to="/contributor" style={{ textDecoration: "none" }}>
            <Button variant="contained">CONRTIBUTOR</Button>
        </Link>
        <br></br>
        <br></br>
        <Link to="/chef" style={{ textDecoration: "none" }}>
            <Button variant="contained">CHEF</Button>
        </Link>



          </div>
        <br></br>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button variant="text">Log Out</Button>
        </Link>
     </div>
    </div>
  );
}

export default Home;
