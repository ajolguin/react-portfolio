import React from "react";
import { Projects, About, Header } from "./containers";
import { CTA, Brand, Navbar } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
        <Brand />
      </div>
      <About />
      <Projects />
      <CTA />
    </div>
  );
};

export default App;
