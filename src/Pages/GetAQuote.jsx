import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Marque from "../Components/Home/Marque";
import FirstOne from "../Components/GetAQuote/FirstOne";
import OurWork from "../Components/GetAQuote/OurWork";
import Questionaire from "../Components/GetAQuote/Questionaire";
import Slides from "../Components/GetAQuote/Slides";
import Navbar from "../Components/Navbar";
import useDocumentTitle from "../hooks/useDocumentTitle"; // Adjust the import path
import { Helmet } from "react-helmet";
import { OurWorks } from "../assets/Data/data";

const GetAQuote = () => {
  const [showImage, setShowImage] = useState(false);
  useDocumentTitle("LYMDATA LABS | Best Web Development Company In Kochi");

  const handleMenuClose = () => {
    setShowImage(true);
  };

  useEffect(() => {
    // Function to remove HubSpot script
    const removeHubSpotScript = () => {
      const hubSpotScript = document.querySelector("script[src*='hubspot']");
      if (hubSpotScript) {
        hubSpotScript.remove();
      }
      const hubSpotEmbed = document.querySelector("#hubspot-messages-iframe-container");
      if (hubSpotEmbed) {
        hubSpotEmbed.remove();
      }
    };

    // Remove HubSpot script on this page
    removeHubSpotScript();

    return () => {
      // Cleanup if necessary
    };
  }, []);

  return (
    <>
      <div id="scroll-container" data-scroll-container>
        <Helmet>
          <title>LYMDATA LABS | Best Web Development Company In Kochi</title>
          <meta
            name="description"
            content="LYMDATA LABS is a dynamic technology and design company that is committed to helping businesses achieve rapid digital transformation with our expertise."
          />
          <link rel="canonical" href="https://www.lymdata.com/" />
          <meta
            property="og:title"
            content="LYMDATA LABS | Best Web Development Company In Kochi"
          />
          <meta
            property="og:description"
            content="LYMDATA LABS is a dynamic technology and design company that is committed to helping businesses achieve rapid digital transformation with our expertise."
          />
          <meta
            name="image"
            property="og:image"
            content="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691419210/LYMDATALABS/Pages/Companylogo_lok0s3_fgcea5.svg"
          />
          <meta property="og:url" content="https://www.lymdata.com/" />
          <meta
            name="twitter:title"
            content="LYMDATA LABS | Best Web Development Company In Kochi"
          />
          <meta
            name="twitter:description"
            content="LYMDATA LABS is a dynamic technology and design company that is committed to helping businesses achieve rapid digital transformation with our expertise."
          />
          <meta
            name="twitter:image"
            content="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691419210/LYMDATALABS/Pages/Companylogo_lok0s3_fgcea5.svg"
          />
        </Helmet>

        <Navbar onMenuClose={handleMenuClose} />
        <FirstOne />
        <Slides />
        <OurWork />
        <Marque />
        <Questionaire />
        <Footer />
      </div>
    </>
  );
};

export default GetAQuote;
