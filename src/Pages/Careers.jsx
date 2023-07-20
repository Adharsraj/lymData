import React, { useEffect } from "react";
import CareerIntro from "../Components/Careers/CareerIntro";
import Footer from "../Components/FooterZipsy";
import JobListing from "../Components/Careers/JobListing";
import Navbar from "../Components/Navbar";

const Careers = () => {
  useEffect(() => {
    document.title = 'LYM DATA - Careers';
  }, []);
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
