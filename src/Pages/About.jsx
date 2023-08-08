import React from "react";
import Faq from "../Components/About/Faq";
import Footer from "../Components/FooterNew";
import Navbar from "../Components/Navbar";
import OurTechGurus from "../Components/About/OurTechGurus";
import OurValues from "../Components/About/OurValues";
import WhyLymData from "../Components/About/WhyLymData";
import UseDocumentTitle from "../Hooks/UseDocumentTitle";

const About = () => {
  UseDocumentTitle("LYM DATA | About");

  return (
    <>
      <Navbar />
      <OurValues />
      <WhyLymData />
      <OurTechGurus />
      <Faq />
      <Footer />
    </>
  );
};

export default About;
