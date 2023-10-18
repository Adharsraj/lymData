import React, { useEffect } from 'react';
import locomotiveScroll from 'locomotive-scroll';
import ReplaceEffect from './Gsap';

const LocomotiveScroll = () => {

  useEffect(() => {
    let scroll = new locomotiveScroll({
      el: document.querySelector("[data-scroll-container]"), // Use the correct selector
      smooth: true,
    });

    new ResizeObserver(() => scroll.update()).observe(document.querySelector("[data-scroll-container]"))
  }, []);

  const h1Style = {
    margin: 0, // Set margin to 0 to remove the margin around the h1 element
  };

  return (
    <div className="data-scroll-container" data-scroll-container>
      <div style={{ backgroundColor: "red",height:'100vh' }} >
        <h1 style={h1Style}>page1</h1>
        <ReplaceEffect/>

      </div>
      <div style={{ backgroundColor: "green",height:'100vh' }}>
      <h1 style={h1Style}>page2</h1>
      </div>
      <div style={{ backgroundColor: "blue",height:'100vh' }} >
      <h1 style={h1Style}>page3</h1>
      </div>
    </div>
  );
};

export default LocomotiveScroll;
