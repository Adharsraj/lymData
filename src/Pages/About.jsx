import React from "react";
import Faq from "../Components/About/Faq";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import OurTechGurus from "../Components/About/OurTechGurus";
import OurValues from "../Components/About/OurValues";
import WhyLymData from "../Components/About/WhyLymData";

const About = () => {
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
