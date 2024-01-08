import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ContactUs from "../Components/Contact/Contact";
import UseDocumentTitle from "../Hooks/UseDocumentTitle";
import Faq from "../Components/About/Faq";
import { Helmet } from "react-helmet";

const Contact = () => {
  UseDocumentTitle("LYMDATA LABS | Web Design company Kochi, Web development company kochi");

  return (
    <>
      <Helmet>
      <title>LYMDATA LABS  | Web Design company Kochi, Web development company kochi</title>
      <meta name="description" content="  Looking for a top web design company? Contact us now for professional and innovative web design solutions " />
      <link rel="canonical" href="  https://www.lymdata.com/contact " />
      <meta property="og:title" content="LYMDATA LABS  | Web Design company Kochi, Web development company kochi" />
      <meta property="og:description" content = "   Looking for a top web design company? Contact us now for professional and innovative web design solutions  " />
 <meta name="image" property="og:image" content="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691419210/LYMDATALABS/Pages/Companylogo_lok0s3_fgcea5.svg" />
      <meta property="og:url" content="  https://www.lymdata.com/contact   " />
      <meta name="twitter:title" content="LYMDATA LABS  | Web Design company Kochi, Web development company kochi" />
      <meta name="twitter:description" content="  Looking for a top web design company? Contact us now for professional and innovative web design solutions  " />
 <meta name="twitter:image" content="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691419210/LYMDATALABS/Pages/Companylogo_lok0s3_fgcea5.svg" />
      </Helmet>

      <Navbar />
      <ContactUs />
      {/* <Faq /> */}
      <Footer />
    </>
  );
};

export default Contact;
