import React, { useEffect } from "react";
import CareerIntro from "../Components/Careers/CareerIntro";
import Footer from "../Components/FooterZipsy";
import JobListing from "../Components/Careers/JobListing";
import Navbar from "../Components/NavbarNew";
import UseDocumentTitle from "../Hooks/UseDocumentTitle";

const Careers = () => {
  UseDocumentTitle("LYM DATA | Home")

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
