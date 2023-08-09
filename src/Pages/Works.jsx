import React, { useEffect } from "react";
import AllWork from "../Components/Works/AllWork";
import AllWorksListing from "../Components/Works/AllWorksListing";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import SelectedWorks from "../Components/Works/SelectedWorks";
import UseDocumentTitle from "../Hooks/UseDocumentTitle";
const Works = () => {
  UseDocumentTitle("LYM DATA | Works");
  return (
    <>
      <Navbar />
      <SelectedWorks />
      <AllWork />
      <AllWorksListing />
      <Footer />
    </>
  );
};

export default Works;
