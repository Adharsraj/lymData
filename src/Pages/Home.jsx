import React from "react";
import Footer from "../Components/Footer";
import Hero from "../Components/Home/Hero";
import HowweThinkdhn from "../Components/Home/HowweThink";
import IndustriesWeknowdhn from "../Components/Home/IndustriesWeknow";
// import Marque from "../Components/Home/Marque";
import ProcessDrivendhn from "../Components/Home/ProcessDriven";
import ProcessDrivenFive from "../Components/Home/ProcessDrivenFive";
import Marque from "../Components/Home/Marque";
import Within7Industriesdhn from "../Components/Home/Within7Industries";
import Navbar from "../Components/Navbar";
import UseDocumentTitle from "../Hooks/UseDocumentTitle";

import LoadingArches from "../Components/loaders/LoadingArches";
import TextLoading from "../Components/loaders/TextLoading";
import HexagonalLoader from "../Components/loaders/HexagonalLoader";
import TrieLoader from "../Components/loaders/TrieLoader";
import SwingLoader from "../Components/loaders/SwingLoader";

const Home = () => {
  UseDocumentTitle("LYM DATA | Home");

  return (
    <>
      <Navbar />
      <Hero />

      {/* <LoadingArches /> */}
      {/* <TextLoading />
      <HexagonalLoader />
      <TrieLoader />
      <SwingLoader /> */}

      <HowweThinkdhn />
      <ProcessDrivendhn />
      <ProcessDrivenFive />
      <IndustriesWeknowdhn />
      {/* <Marque /> */}

      <Marque />
      <Within7Industriesdhn />
      <Footer />
    </>
  );
};

export default Home;
