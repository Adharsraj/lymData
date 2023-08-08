import React from "react";
import Footer from "../Components/FooterNew";
import Navbar from "../Components/Navbar";
import ContactUs from "../Components/Contact/Contact";
import UseDocumentTitle from "../Hooks/UseDocumentTitle";
import Faq from "../Components/About/Faq";
const Contact = () => {
  UseDocumentTitle("LYM DATA | Contact");

  return (
    <>
      <Navbar />
      <ContactUs />
      <Faq />
      <Footer />
    </>
  );
};

export default Contact;
