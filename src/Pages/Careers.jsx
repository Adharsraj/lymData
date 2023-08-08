import React, { useEffect } from "react";
import CareerIntro from "../Components/Careers/CareerIntro";
import Footer from "../Components/Footer";
import JobListing from "../Components/Careers/JobListing";
import Navbar from "../Components/Navbar";
import UseDocumentTitle from "../Hooks/UseDocumentTitle";

const Careers = () => {
  UseDocumentTitle("LYM DATA | Careers");

  return (
    <>
      <Navbar />
      <CareerIntro />
      <JobListing />
      <Footer />
    </>
  );
};

export default Careers;
