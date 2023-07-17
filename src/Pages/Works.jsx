import React from "react";
import AllWork from "../Components/Works/AllWork";
import AllWorksListing from "../Components/Works/AllWorksListing";
import Footer from "../Components/FooterNew";
import Navbar from "../Components/Navbar";
import SelectedWorks from "../Components/Works/SelectedWorks";

const Works = () => {
  return (
    <>
      <Navbar />
      <SelectedWorks />
       <AllWork/>
       <AllWorksListing/>
      <Footer />
    </>
  );
};

export default Works;
