import React from "react";
import Footer from "../Components/Footer";
import Hero from "../Components/Home/Hero";
import HowweThinkdhn from "../Components/Home/HowweThink";
import IndustriesWeknowdhn from "../Components/Home/IndustriesWeknow";
import ProcessDrivendhn from "../Components/Home/ProcessDriven";
import ProcessDrivenFive from "../Components/Home/ProcessDrivenFive";
import Marque from "../Components/Home/Marque";
import Within7Industriesdhn from "../Components/Home/Within7Industries";
import Navbar from "../Components/Navbar";
import UseDocumentTitle from "../Hooks/UseDocumentTitle";


const Home = () => {
  UseDocumentTitle("LYM DATA | Home");

  return (
    <>
        <Navbar />
        <Hero />
        <HowweThinkdhn />
        <ProcessDrivendhn />
        <ProcessDrivenFive />
        <IndustriesWeknowdhn />
        <Marque />
        <Within7Industriesdhn />
        <Footer />  
    </>
  );
};

export default Home;
