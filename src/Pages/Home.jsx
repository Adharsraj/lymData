import React, { useState } from "react";
import Footer from "../Components/Footer";
import Hero from "../Components/Home/Hero";
import HowweThinkdhn from "../Components/Home/HowWeThink";
import IndustriesWeknowdhn from "../Components/Home/IndustriesWeknow";
import ProcessDrivendhn from "../Components/Home/ProcessDriven";
import ProcessDrivenFive from "../Components/Home/ProcessDrivenFive";
import Marque from "../Components/Home/Marque";
import Within7Industriesdhn from "../Components/Home/Within7Industries";
import Navbar from "../Components/Navbar";
import UseDocumentTitle from "../Hooks/UseDocumentTitle";
import DataSlide1 from "../Components/Home/DataSlide1";
import Services from "../Components/Home/Services";
import Insights from "../Components/Home/Insights";
import DhnnScroller from "../Components/Home/DhnnScroller";


const Home = () => {
  const [showImage, setShowImage] = useState(false);
  UseDocumentTitle("LYM DATA | Home");
  const handleMenuClose = () => {
    setShowImage(true); // Trigger image appearance when the menu is closed
  };

  return (
    <>
         <Navbar onMenuClose={handleMenuClose} />
      {/* <Hero showImage={showImage} /> */}
      <DhnnScroller />
        <HowweThinkdhn />
{/* <LocomotiveScroll/> */}
        <DataSlide1 />
        {/* <ProcessDrivendhn /> */}
        {/* <ProcessDrivenFive /> */}
        {/* <IndustriesWeknowdhn /> */}
        <Services />
        <Insights />
        {/* <Within7Industriesdhn /> */}
        <Marque />
        <Footer />  
    </>
  );
};

export default Home;
