import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Contributor from "./pages/Contributor";
import Chef from "./pages/Chef";
import WriteRecipe from "./pages/WriteRecipe";
import MyRecipes from "./pages/MyRecipes";
import BrowseRecipes from "./pages/BrowseRecipes";
import GroceryRun from "./pages/GroceryRun";
import MyProducts from "./pages/MyProducts";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="home" element={<Home />} />
        <Route path="contributor" element={<Contributor />} />
        <Route path="chef" element={<Chef />} />
        <Route path="writerecipe" element={<WriteRecipe />} />
        <Route path="myrecipes" element={<MyRecipes />} />
        <Route path="browse" element={<BrowseRecipes />} />
        <Route path="products" element={<MyProducts />} />
        <Route path="groceryrun" element={<GroceryRun />} />
        {/* <Route path="contact" element={ <Contact/> } /> */}
      </Routes>
    </div>
  );
}

export default App;
