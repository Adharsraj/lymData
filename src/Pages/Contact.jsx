import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ContactUs from "../Components/Contact/Contact";
import UseDocumentTitle from "../Hooks/UseDocumentTitle";
const Contact = () => {
  UseDocumentTitle("LYM DATA | Home");

  return (
    <>
      <Navbar />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Contact;
