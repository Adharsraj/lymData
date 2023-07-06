import React from "react";
import Faq from "../Components/Faq";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import OurTechGurus from "../Components/OurTechGurus";
import OurValues from "../Components/OurValues";
import WhyLymData from "../Components/WhyLymData";

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
