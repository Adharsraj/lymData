import React from "react";
import BuildingTogether from "../Components/Culture/BuildingTogether";
import Cultureandmore from "../Components/Culture/Cultureandmore";
import FourCultures from "../Components/Culture/FourCultures";
import Services from "../Components/Culture/Services";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import UseDocumentTitle from "../Hooks/UseDocumentTitle";

const Culture = () => {
  UseDocumentTitle("LYM DATA | About");

  return (
    <>
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
