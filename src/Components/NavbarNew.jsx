import React, { useEffect, useRef } from 'react';
import { TimelineMax, Expo } from 'gsap';

const NavbarNew = () => {
  const menuRef = useRef(null);
  const oneRef = useRef(null);
  const twoRef = useRef(null);

  useEffect(() => {
    const t1 = new TimelineMax({ paused: true });

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
      '-=0.05'
    );

    t1.to(
      menuRef.current,
      0.15,
      {
        top: '0%',
        ease: Expo.easeInOut,
        delay: -0.15,
      },
      '-=0.05'
    );

    t1.staggerFrom(
      '.menu ul li',
      0.15,
      { x: -200, opacity: 0, ease: Expo.easeOut },
      0.1
    );

    t1.reverse();

    const toggleAnimation = () => {
      t1.reversed(!t1.reversed());
    };

    const handleLinkClick = () => {
      t1.reversed(!t1.reversed());
    };

    document
      .querySelector('.toggle-btn')
      .addEventListener('click', toggleAnimation);
    document.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', handleLinkClick);
    });

    return () => {
      // Cleanup: Remove event listeners when the component is unmounted
      document
        .querySelector('.toggle-btn')
        .removeEventListener('click', toggleAnimation);
      document.querySelectorAll('a').forEach((link) => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, []);

  return (
    <>
      {/* <h1 className='border text-red-400 mb-20'>Responsive Navigation</h1> */}
      <div className="toggle-btn mt-32">
        <span className="one mb-20" ref={oneRef}>fhhgcsc</span>
        <span className="two" ref={twoRef}>ghhh</span>
      </div>
      <div className="menu" ref={menuRef}>
        <div className="data">
          <ul>
            <li>Navigation</li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Our Story</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavbarNew;
