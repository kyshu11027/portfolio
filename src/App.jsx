import { useState } from "react";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <AboutMe />
    </>
  );
}

export default App;
