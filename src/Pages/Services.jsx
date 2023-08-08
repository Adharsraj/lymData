import React, { useEffect } from "react";
import Footer from "../Components/FooterNew";
import Navbar from "../Components/Navbar";
import Approaches from "../Components/Services/Approaches";
import ServicesEnd from "../Components/Services/ServicesEnd";
import ServicesLanding from "../Components/Services/ServicesLanding";
import UseDocumentTitle from "../Hooks/UseDocumentTitle";

const Services = () => {
  UseDocumentTitle("LYM DATA | Services");

  return (
    <>
      <Navbar />
      <ServicesLanding />
      <Footer />
    </>
  );
};

export default Services;
