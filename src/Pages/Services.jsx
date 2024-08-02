import React, { useEffect } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
// import Approaches from "../Components/Services/Approaches";
import ServicesEnd from "../Components/Services/ServicesEnd";
import ServicesLanding from "../Components/Services/ServicesLanding";
import UseDocumentTitle from "../Hooks/UseDocumentTitle";
import { Helmet } from "react-helmet";
import ContactUs from "../Components/Services/contact";
import Process from "../Components/Services/process";
import FAQ from "../Components/Services/faq";
import Benefits from "../Components/Services/benefits";
import OurServices from "../Components/Services/ourservice";
import Service from "../Components/Services/service";

const Services = () => {
  UseDocumentTitle("LYMDATA LABS  | Top Web Design Company - Expert Services");

  return (
    <div className="bg-black min-h-screen"> 
      <Helmet>
        <title>LYMDATA LABS  | Top Web Design Company - Expert Services</title>
        <meta name="description" content="Looking for expert web design services? Choose the top web design company for professional solutions that drive results." />
        <link rel="canonical" href="https://www.lymdata.com/services" />
        <meta property="og:title" content="LYMDATA LABS  | Top Web Design Company - Expert Services" />
        <meta property="og:description" content="Looking for expert web design services? Choose the top web design company for professional solutions that drive results." />
        <meta name="image" property="og:image" content="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691419210/LYMDATALABS/Pages/Companylogo_lok0s3_fgcea5.svg" />
        <meta property="og:url" content="https://www.lymdata.com/services" />
        <meta name="twitter:title" content="LYMDATA LABS  | Top Web Design Company - Expert Services" />
        <meta name="twitter:description" content="Looking for expert web design services? Choose the top web design company for professional solutions that drive results." />
        <meta name="twitter:image" content="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691419210/LYMDATALABS/Pages/Companylogo_lok0s3_fgcea5.svg" />
      </Helmet>

      <Navbar />
      <div className="">
        <Service/>
      </div>
      <div>
        <OurServices/>
      </div>
      {/* <ServicesLanding /> */}
      <div className="mt-4">
      <Process/>
      </div>
      <div className="mt-2">
        <Benefits/>
      </div>
      <div className="mt-2">
      <FAQ/>
      </div>
      <div className="flex justify-center mt-6">
        <ContactUs />
      </div>
      <div className="mt-4" >
      <Footer />
      </div>
    </div>
  );
};

export default Services;
