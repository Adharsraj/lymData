import React, { useEffect } from "react";
import Faq from "../Components/About/Faq";
import Footer from "../Components/FooterZipsy";
import Navbar from "../Components/Navbar";
import OurTechGurus from "../Components/About/OurTechGurus";
import OurValues from "../Components/About/OurValues";
import WhyLymData from "../Components/About/WhyLymData";

const About = () => {
  useEffect(() => {
    document.title = 'LYM DATA - About';
  }, []);
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
