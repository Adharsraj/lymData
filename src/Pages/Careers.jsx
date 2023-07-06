import React from "react";
import CareerIntro from "../Components/CareerIntro";
import Footer from "../Components/Footer";
import JobListing from "../Components/JobListing";
import Navbar from "../Components/Navbar";

const Careers = () => {
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
