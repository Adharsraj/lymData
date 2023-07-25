import React from 'react'
import BuildingTogether from '../Components/Culture/BuildingTogether'
import Cultureandmore from '../Components/Culture/Cultureandmore'
import FourCultures from '../Components/Culture/FourCultures'
import Services from '../Components/Culture/Services'
import FooterZipsy from '../Components/Footer'
import NavbarNew from '../Components/Navbar'
import UseDocumentTitle from "../Hooks/UseDocumentTitle";

const Culture = () => {
  UseDocumentTitle("LYM DATA | Culture");

  return (
    <div>
        <NavbarNew/>
        <BuildingTogether/>
        <Cultureandmore/>
        <FourCultures/>
        <Services/>
        <FooterZipsy/>
      
    </div>
  )
}

export default Culture
