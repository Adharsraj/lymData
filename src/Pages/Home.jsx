import React, { useState } from "react";
import Footer from "../Components/Footer";
import Hero from "../Components/Home/Hero";
import HowweThinkdhn from "../Components/Home/HowWeThink";
// import IndustriesWeknowdhn from "../Components/Home/IndustriesWeknow";
import ProcessDrivendhn from "../Components/Home/ProcessDriven";
import ProcessDrivenFive from "../Components/Home/ProcessDrivenFive";
import Marque from "../Components/Home/Marque";
import Within7Industriesdhn from "../Components/Home/Within7Industries";
import Navbar from "../Components/Navbar";
import UseDocumentTitle from "../Hooks/UseDocumentTitle";
import DataSlide1 from "../Components/Home/DataSlide1";
import DhnnScroller from "../Components/Home/DhnnScroller";
import Services from "../Components/Home/Services";
import Insights from "../Components/Home/Insights";
import { Helmet } from "react-helmet";


const Home = () => {
  const [showImage, setShowImage] = useState(false);
  UseDocumentTitle("LYMDATA LABS | Best Web Development Company In Kochi");
  const handleMenuClose = () => {
    setShowImage(true); 
  };

  
  return (
    <>
       <Helmet>
      <title>LYMDATA LABS  | Best Web Development Company In Kochi</title>
      <meta name="description" content=" LYMDATA LABS is a dynamic technology and design company that is committed to helping businesses achieve rapid digital transformation With our expertise." />
      <link rel="canonical" href=" https://www.lymdata.com/ " />
      <meta property="og:title" content="LYMDATA LABS  | Best Web Development Company In Kochi" />
      <meta property="og:description" content = "  LYMDATA LABS is a dynamic technology and design company that is committed to helping businesses achieve rapid digital transformation With our expertise." />
 <meta name="image" property="og:image" content="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691419210/LYMDATALABS/Pages/Companylogo_lok0s3_fgcea5.svg" />
      <meta property="og:url" content=" https://www.lymdata.com/  " />
      <meta name="twitter:title" content=" LYMDATA LABS  | Best Web Development Company In Kochi " />
      <meta name="twitter:description" content=" LYMDATA LABS is a dynamic technology and design company that is committed to helping businesses achieve rapid digital transformation With our expertise.  " />
 <meta name="twitter:image" content="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691419210/LYMDATALABS/Pages/Companylogo_lok0s3_fgcea5.svg" />
      </Helmet>


         <Navbar onMenuClose={handleMenuClose} />
      {/* <Hero showImage={showImage} /> */}
        <DhnnScroller />
        <HowweThinkdhn />
{/* <LocomotiveScroll/> */}
        <DataSlide1 />
        {/* <ProcessDrivendhn /> */}
        {/* <ProcessDrivenFive /> */}
        {/* <IndustriesWeknowdhn /> */}
        <Within7Industriesdhn />
        {/* <Services /> */}
        <Insights />
        <Marque />
        <Footer />  
    </>
  );
};

export default Home;
