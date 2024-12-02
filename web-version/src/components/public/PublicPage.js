// src/components/public/PublicPage.js
import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Details from "./Details";
import Footer from "./Footer";

const PublicPage = ({isAuthenticated}) => {
  return (
    <>
      <Navbar isAuthenticated={isAuthenticated}/>
      <Hero />
      <Features />
      <Details />
      <Footer />
    </>
  );
};

export default PublicPage;
