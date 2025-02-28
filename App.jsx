import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthPage from "./LOGIN&REGISTER/Auth"; 
import Home from "./HOME/Home"
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<AuthPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
