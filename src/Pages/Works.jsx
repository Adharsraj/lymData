import React, { useEffect } from "react";
import AllWork from "../Components/Works/AllWork";
import AllWorksListing from "../Components/Works/AllWorksListing";
import Footer from "../Components/FooterZipsy";
import Navbar from "../Components/Navbar";
import SelectedWorks from "../Components/Works/SelectedWorks";

const Works = () => {
  useEffect(() => {
    document.title = 'LYM DATA - Works';
  }, []);
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
