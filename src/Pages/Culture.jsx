import React from "react";
import BuildingTogether from "../Components/Culture/BuildingTogether";
import Cultureandmore from "../Components/Culture/Cultureandmore";
import FourCultures from "../Components/Culture/FourCultures";
import Services from "../Components/Culture/Services";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import UseDocumentTitle from "../Hooks/UseDocumentTitle";
import { Helmet } from "react-helmet";

const Culture = () => {
  UseDocumentTitle("LYMDATA LABS | Leading Web Development Company in Kochi");

  return (
    <>
      <Helmet>
      <title>LYMDATA LABS  | Leading Web Development Company in Kochi</title>
      <meta name="description" content=" Boost your online presence with our top-rated web development services. Trust the leading web development company in Kochi for innovative solutions. " />
      <link rel="canonical" href=" https://www.lymdata.com/about  " />
      <meta property="og:title" content="LYMDATA LABS  | Leading Web Development Company in Kochi" />
      <meta property="og:description" content = "  Boost your online presence with our top-rated web development services. Trust the leading web development company in Kochi for innovative solutions. " />
 <meta name="image" property="og:image" content="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691419210/LYMDATALABS/Pages/Companylogo_lok0s3_fgcea5.svg" />
      <meta property="og:url" content=" https://www.lymdata.com/about   " />
      <meta name="twitter:title" content="LYMDATA LABS  | Leading Web Development Company in Kochi" />
      <meta name="twitter:description" content=" Boost your online presence with our top-rated web development services. Trust the leading web development company in Kochi for innovative solutions.   " />
 <meta name="twitter:image" content="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691419210/LYMDATALABS/Pages/Companylogo_lok0s3_fgcea5.svg" />
      </Helmet>


      <Navbar />
      <BuildingTogether />
      <Cultureandmore />
      <FourCultures />
      <Services />
      <Footer />
    </>
  );
};

export default Culture;
