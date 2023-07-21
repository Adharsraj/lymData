import React, { useEffect, useRef, useState, } from "react";
import { TimelineMax, Expo } from "gsap";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import CompanyLogo from "../assets/Logos/Companylogo.svg";
import gsap from "gsap";

const NavbarNew = () => {

    const location = useLocation();

    const navigationItems = [
      { path: '/', label: 'Home' },
      { path: '/about', label: 'About' },
      { path: '/blog', label: 'Blogs' },
      { path: '/careers', label: 'Careers' },
      { path: '/works', label: 'Works' },
      { path: '/services', label: 'Services' },
    ];


  const menuRef = useRef(null);
  const oneRef = useRef(null);
  const twoRef = useRef(null);
  const [scrolling, setScrolling] = useState(false);

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


    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const navbarBgColor = scrolling ? "bg-[#ecebff]" : "bg-transparent";


  return (
    <>
    <div className=" ">

      <h1 id="navh1" className="bg-black">
        
      </h1>
      <div id="menu" className={`toggle-btn w-full  ${navbarBgColor}   flex items-center   justify-between px-10 align-middle`}>
<div className="mt-5">
        <Link to="/">
        <img
            id="logo"
            className="lg:w-[104px]  lg:h-[80px] md:w-16 w-24 "
            src={CompanyLogo}
            alt="companylogo"
          />        </Link>

</div>
<div  className="w-full h-20" >
<Link to="#">
<div  className=" w-full h-20">
</div>
</Link>
</div>
        <div className="w-20  h-12 mt-5   flex   py-2 px-2 ">
          <span className="one px-2    bg-red-500" ref={oneRef}></span>
          <span className="two  bg-red-500" ref={twoRef}></span>
        </div>
      </div>
      <div className="menu w-screen  h-screen " ref={menuRef}>
        <div className="flex justify-center items-center h-screen">
          <div className="w-screen lg:flex lg:flex-end lg:items-center   justify-around">
            <div className="text-white md:flex md:flex-col md:gap-6  text-4xl md:text-6xl px-10 md:mt-24 lg:mt-0">
            <ul>
      {navigationItems.map((item) => {
        if (location.pathname !== item.path) {
          return (
            <li key={item.path} className="lg:mb-8 hover:text-amber-500">
              <Link to={item.path}>{item.label}</Link>
            </li>
          );
        }
        return null; // If on the specified page, don't render the item
      })}
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
      </div>

    </>
  );
};

export default NavbarNew;