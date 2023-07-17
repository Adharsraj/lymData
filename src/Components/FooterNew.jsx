import React from "react";
import logo1 from "../assets/footersvg/Frame (1).svg";
import logo2 from "../assets/footersvg/Frame (2).svg";
import logo3 from "../assets/footersvg/Frame (3).svg";
import logo4 from "../assets/footersvg/Frame (4).svg";
import logo5 from "../assets/footersvg/Frame.svg";
import CompanyLogo from '../assets/Logos/Group 51.svg'

const FooterNew = () => {
  return (
    <div className="max-w-[1640px]  mx-auto p-2 ">
      <div className="xl:grid xl:grid-cols-2">
        <div className="md:ml-8 xl:mr-10   xl:mt-[-30px] ">
          <h1 className="text-xl md:text-5xl font-times">Get in touch</h1>
          <h1 className="text-3xl font-bold md:text-6xl">hello@lonsdale.fr</h1>
        </div>
        <div className="flex mt-8 mb-8 xl:mt-[-90px] ">
          <img
            className="border-t border-r border-b px-2 py-6 md:py-12 md:px-12"
            src={logo1}
            alt={logo1}
          />
          <img className="border px-2 py-6 md:py-12 md:px-12 xl:py-24 " src={logo2} alt={logo1} />
          <img className="border px-2 py-6 md:py-12 md:px-12 xl:py-20" src={logo3} alt={logo1} />
          <img className="border px-2 py-6 md:py-12 md:px-12" src={logo4} alt={logo1} />
          <img
            className="border-t  border-b px-2 py-6 md:py-12 md:px-12"
            src={logo5}
            alt={logo1}
          />
        </div>
      </div>

      <div className="border-b md:ml-8 lg:grid lg:grid-cols-5 lg:gap-10 pb-4 ">
        <div className="text-sm lg:text-base">
          <h1 className="font-bold mt-3 mb-3">Lonsdale - paris office</h1>
          <h1>8 rue Lavoisier</h1>
          <h1>75008 Paris – France</h1>
          <h1>+33(0)1 43 12 67 00</h1>
        </div>
        <div className="mb-6 text-sm lg:text-base">
          <h1 className="font-bold mt-3 mb-3">Lonsdale - paris office</h1>
          <h1>8 rue Lavoisier</h1>
          <h1>75008 Paris – France</h1>
          <h1>+33(0)1 43 12 67 00</h1>
        </div>
        <div className="lg:col-span-2">
          <h2 className="text-sm lg:text-base lg:w-full  w-[270px] lg:mt-3 md:w-[590px]">
            As a leading branding and design agency since 1961, we bring
            together a team of 250 experts to observe new uses in Europe and
            Asia from Paris and Singapore, and around the world through our
            sister agency CBX in the US. Lonsdale is a single, agile and
            responsive agency with two locations, that helps companies, product
            brands and retailers define their uniqueness to build coherent,
            effective and sustainable experiences.
          </h2>
        </div>
        <div className="text-sm lg:text-base">
          <h1 className="font-bold mt-3 mb-3">Lonsdale - paris office</h1>
          <h1>8 rue Lavoisier</h1>
          <h1>75008 Paris – France</h1>
          <h1>+33(0)1 43 12 67 00</h1>
        </div>{" "}
      </div>

      <div className="mt-5 mb-5 md:ml-8 lg:hidden">
        <h2>Contact</h2>
        <h2>work</h2>
        <h2>Legals</h2>
        <h2>Configure Cookies</h2>
      </div>

      <div className="flex justify-between px-2 md:px-8 lg:hidden">
      <img className='w-24 h-18 ' src={CompanyLogo} alt="company logo" />
        <h1>2021</h1>
      </div>

      <div className="hidden mt-8 mb-8 px-6 lg:flex text-2xl justify-between">
      <img className='w-24 h-18 mx-4' src={CompanyLogo} alt="company logo" />
        <h1>Contact</h1>
        <h1>work</h1>
        <h2>Legals</h2>
        <h2>Configure Cookies</h2>
        <h1>2021</h1>
      </div>
    </div>
  );
};

export default FooterNew;
