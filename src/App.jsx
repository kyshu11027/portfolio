import { useState } from "react";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<AboutMe />} />
        <Route exact path="/projects" element={<Projects />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
