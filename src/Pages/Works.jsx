import React, { useEffect } from "react";
import AllWork from "../Components/Works/AllWork";
import AllWorksListing from "../Components/Works/AllWorksListing";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import SelectedWorks from "../Components/Works/SelectedWorks";
import UseDocumentTitle from "../Hooks/UseDocumentTitle";
import WorksNew from "../Components/Works/WorksNew";
import { WorksHome } from "../Components/Works/WorksHome";
import { Helmet } from "react-helmet";

const Works = () => {
  UseDocumentTitle("LYMDATA LABS  | Top Digital Marketing & Branding Company | Expert Services");
  return (
    <>
      <Helmet>
      <title>LYMDATA LABS  | Top Digital Marketing & Branding Company | Expert Services</title>
      <meta name="description" content=" Looking for expert digital marketing and branding services? Choose the top company in the industry for all your needs." />
      <link rel="canonical" href="   https://www.lymdata.com/works  " />
      <meta property="og:title" content="LYMDATA LABS  | Top Digital Marketing & Branding Company | Expert Services" />
      <meta property="og:description" content = "   Looking for expert digital marketing and branding services? Choose the top company in the industry for all your needs.  " />
 <meta name="image" property="og:image" content="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691419210/LYMDATALABS/Pages/Companylogo_lok0s3_fgcea5.svg" />
      <meta property="og:url" content="  https://www.lymdata.com/works     " />
      <meta name="twitter:title" content="LYMDATA LABS  | Top Digital Marketing & Branding Company | Expert Services" />
      <meta name="twitter:description" content="  Looking for expert digital marketing and branding services? Choose the top company in the industry for all your needs.  " />
 <meta name="twitter:image" content="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691419210/LYMDATALABS/Pages/Companylogo_lok0s3_fgcea5.svg" />
      </Helmet>

      <Navbar />
      {/* <SelectedWorks />
      <AllWork />
      <AllWorksListing /> */}
      {/* <WorksNew /> */}
      <WorksHome />
      <Footer />
    </>
  );
};

export default Works;
