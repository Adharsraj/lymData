import React, { useEffect, useRef } from "react";
import { TimelineMax, Expo } from "gsap";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import CompanyLogo from "../assets/Logos/Companylogo.svg";
import gsap from "gsap";

const NavbarNew = () => {
  const menuRef = useRef(null);
  const oneRef = useRef(null);
  const twoRef = useRef(null);

  useEffect(() => {
    const t1 = new TimelineMax({ paused: true });
    gsap.from("#logo,#menu", {
        y: -100,
        duration: 0.5,
        delay: 0.5,
        opacity: 0,
        stagger: 0.2,
      });
  
    t1.to(oneRef.current, 0.05, {
      y: 6,
      rotation: 45,
      ease: Expo.easeInOut,
    });
    t1.to(
      twoRef.current,
      0.05,
      {
        y: -6,
        rotation: -45,
        ease: Expo.easeInOut,
        delay: -0.05,
      },
      "-=0.05"
    );

    t1.to(
      menuRef.current,
      0.15,
      {
        top: "0%",
        ease: Expo.easeInOut,
        delay: -0.15,
      },
      "-=0.05"
    );

    t1.staggerFrom(
      ".menu ul li",
      0.15,
      { y: -200, opacity: 0, ease: Expo.easeOut },
      0.03
    );

    t1.reverse();

    const toggleAnimation = () => {
      t1.reversed(!t1.reversed());
    };

    const handleLinkClick = () => {
      t1.reversed(!t1.reversed());
    };

    document
      .querySelector(".toggle-btn")
      .addEventListener("click", toggleAnimation);
    document.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    // return () => {
    //   // Cleanup: Remove event listeners when the component is unmounted
    //   document
    //     .querySelector('.toggle-btn')
    //     .removeEventListener('click', toggleAnimation);
    //   document.querySelectorAll('a').forEach((link) => {
    //     link.removeEventListener('click', handleLinkClick);
    //   });
    // };
  }, []);

  return (
    <>
      <h1 id="navh1" className="bg-black">
        
      </h1>
      <div id="menu" className="toggle-btn w-full mt-10   flex items-center   justify-between px-10 align-middle">
        <Link to="/">
        <img
            id="logo"
            className="lg:w-[104px]  lg:h-[80px] md:w-16 w-12 "
            src={CompanyLogo}
            alt="companylogo"
          />        </Link>
        <div className="w-10 h-10   flex  py-2 ">
          <span className="one  bg-red-500" ref={oneRef}></span>
          <span className="two bg-red-500" ref={twoRef}></span>
        </div>
      </div>
      <div className="menu w-screen  h-screen " ref={menuRef}>
        <div className="flex justify-center items-center h-screen">
          <div className="w-screen lg:flex lg:flex-end lg:items-center   justify-around">
            <div className="text-white md:flex md:flex-col md:gap-6  text-4xl md:text-6xl px-10 md:mt-24 lg:mt-0">
              <ul>
                <li className="text-gray-500 lg:mt-8 lg:mb-4 text-sm md:text-base">
                  Navigation
                </li>
                <li className="lg:mb-8 hover:text-amber-500 ">
                  <Link to="/">Home</Link>
                </li>
                <li className="lg:mb-8 hover:text-amber-500"> 
                  <Link to="/about">About</Link>
                </li>
                <li className="lg:mb-8 hover:text-amber-500">
                  <Link to='/blogs'>Blogs</Link>
                </li>
                <li className="lg:mb-8 hover:text-amber-500">
                  <Link to='/careers'>Careers</Link>
                </li>
                <li className="lg:mb-8 hover:text-amber-500">
                  <Link to='/works'>Works</Link>
                </li>
                <li className="lg:mb-8 hover:text-amber-500">
                  <Link to='/services'>Services</Link>
                </li>
              </ul>
            </div>
            <div className="text-white md:text-2xl mt-10 px-10">
              <ul>
                <li className="lg:mb-5">
                    <Link to='/contact'>
                    Contact
                    </Link>
                </li>
                <li className="lg:mb-5">
                    <Link to='/privacy'>
                    Privacy&legal
                    </Link>
                </li>
                <li className="flex lg:flex-col justify-between items-center lg:items-start gap-2">
                    <Link className="lg:mb-5">
                    Accessibility
                    </Link>
                  <div className="flex gap-2 lg:gap-14">
                    <span>
                      <BsFacebook />
                    </span>
                    <span>
                      <AiFillInstagram />
                    </span>
                    <span>
                      <FaTwitter />
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarNew;
