import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About.jsx";
import Project from "./Pages/Project.jsx";
import Gitcale from "./Pages/Gitcale";
import Connect from "./Pages/Connect";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>

      <About></About>
      <Project></Project>
      <Gitcale></Gitcale>
      <Connect></Connect>
 
    </div>
  );
}

export default App;
