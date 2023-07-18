import React from 'react';
import ibmLogo from "../../assets/Images/partners/ibm.svg";
import telefonicaLogo from "../../assets/Images/partners/telefonica.svg";
import turnerLogo from "../../assets/Images/partners/turner.svg";
import viacomLogo from "../../assets/Images/partners/viacom.svg";

const Marquee = () => {
  return (
    <div>
      <div className="relative flex overflow-x-hidden">
        <div className="py-12 animate-marquee whitespace-nowrap flex gap-7">
          <img src={ibmLogo} alt="IBM Logo" className="mx-4 h-12" />
          <img src={telefonicaLogo} alt="Telefonica Logo" className="mx-4 h-12" />
          <img src={turnerLogo} alt="Turner Logo" className="mx-4 h-12" />
          <img src={viacomLogo} alt="Viacom Logo" className="mx-4 h-12" />
          <img src={telefonicaLogo} alt="Telefonica Logo" className="mx-4 h-12" />
          <img src={turnerLogo} alt="Turner Logo" className="mx-4 h-12" />
          <img src={viacomLogo} alt="Viacom Logo" className="mx-4 h-12" />
          <img src={telefonicaLogo} alt="Telefonica Logo" className="mx-4 h-12" />
          <img src={turnerLogo} alt="Turner Logo" className="mx-4 h-12" />
          <img src={telefonicaLogo} alt="Telefonica Logo" className="mx-4 h-12" />
          <img src={turnerLogo} alt="Turner Logo" className="mx-4 h-12" />
          <img src={telefonicaLogo} alt="Telefonica Logo" className="mx-4 h-12" />
          <img src={turnerLogo} alt="Turner Logo" className="mx-4 h-12" />
          <img src={viacomLogo} alt="Viacom Logo" className="mx-4 h-12" />
          <img src={telefonicaLogo} alt="Telefonica Logo" className="mx-4 h-12" />
        </div>

        {/* <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex ">
          <img src={ibmLogo} alt="IBM Logo" className="mx-4 h-12" />
          <img src={telefonicaLogo} alt="Telefonica Logo" className="mx-4 h-12" />
          <img src={turnerLogo} alt="Turner Logo" className="mx-4 h-12" />
          <img src={viacomLogo} alt="Viacom Logo" className="mx-4 h-12" />
        </div> */}
      </div>
    </div>
  );
};

export default Marquee;
