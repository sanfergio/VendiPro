import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Details from "./Details";
import Footer from "./Footer";
import "./styles.css";
import "./responsivo.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Details />
      <Footer />
    </div>
  );
};

export default App;
