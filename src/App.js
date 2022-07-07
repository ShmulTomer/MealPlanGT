import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="signup" element={ <Signup/> } />
        {/* <Route path="contact" element={ <Contact/> } /> */}
      </Routes>
    </div>
  )
}

export default App