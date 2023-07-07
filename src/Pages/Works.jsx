import React from "react";
import AllWork from "../Components/AllWork";
import AllWorksListing from "../Components/AllWorksListing";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import SelectedWorks from "../Components/SelectedWorks";

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
