import "./app.scss"
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import React from "react";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return(
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/watch" element={<Watch/>}/>
      </Routes>
    </Router>
  </>
  );
};

export default App;