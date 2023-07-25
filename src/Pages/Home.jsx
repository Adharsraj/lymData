import React, { useEffect } from "react";
import Footer from "../Components/Footer";
import Hero from "../Components/Home/Hero";
import HowweThinkdhn from "../Components/Home/HowweThink";
import IndustriesWeknowdhn from "../Components/Home/IndustriesWeknow";
import Marque from "../Components/Home/Marque";
import ProcessDrivendhn from "../Components/Home/ProcessDriven";
import ProcessDrivenFive from "../Components/Home/ProcessDrivenFive";
import Within7Industriesdhn from "../Components/Home/Within7Industries";
import Navbar from "../Components/Navbar";
import UseDocumentTitle from "../Hooks/UseDocumentTitle";
import LocomotiveScroll from "locomotive-scroll";

const Home = () => {
  UseDocumentTitle("LYM DATA | Home");

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("#main-content"), // ID of the scrolling container
      smooth: true, // Enable smooth scrolling
    });

  }, []);

  return (
    <div style={{  "height": "100vh"   }} id="main-content">
      <Navbar />
      <Hero />
      <HowweThinkdhn />
      <ProcessDrivendhn />
      <ProcessDrivenFive />
      <IndustriesWeknowdhn />
      <Marque />
      <Within7Industriesdhn />
      <Footer />
    </div>
  );
};

export default Home;
