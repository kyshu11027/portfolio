import { useState } from "react";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<AboutMe />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/skills" element={<Skills />} />
      </Routes>
    </>
  );
}

export default App;
