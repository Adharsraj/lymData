import React, { useEffect } from "react";
import AllWork from "../Components/Works/AllWork";
import AllWorksListing from "../Components/Works/AllWorksListing";
import Footer from "../Components/FooterZipsy";
import Navbar from "../Components/NavbarNew";
import SelectedWorks from "../Components/Works/SelectedWorks";
import UseDocumentTitle from "../Hooks/UseDocumentTitle";

const Works = () => {
  UseDocumentTitle("LYM DATA | Home")

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
