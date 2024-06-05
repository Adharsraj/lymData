import React, { useState, useEffect } from 'react';

const OurWork = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const slides = [
    {
      src: 'https://lymdatalabs.s3.ap-south-1.amazonaws.com/lym+website/Works/AlHub.png',
      title: 'AL-Hub',
    },
    {
      src: 'https://lymdatalabs.s3.ap-south-1.amazonaws.com/lym+website/Works/Farmfedtourism.png',
      title: 'Farmfed',
    },
    {
      src: 'https://lymdatalabs.s3.ap-south-1.amazonaws.com/lym+website/Works/Oottu.png',
      title: 'Oottupura',
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, []);

  const mobileStyles = {
    container: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    slide: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    },
    imageContainer: {
      width: '200px', // Increase width for mobile
      height: '110px', // Increase height for mobile
      borderRadius: '6px',
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  };

  return (
    <div className="bg-black" data-scroll-section>
      <h4 className="lg:text-[30px] lg:p-12 lg:px-28 text-[25px] font-thin p-3 text-center text-white">
        Our Works
      </h4>
      {isMobile ? (
        <div style={mobileStyles.container} className="lg:px-10">
          <div style={mobileStyles.slide}>
            <div className="flex flex-col items-center gap-2 shadow-2xl cursor-pointer">
              <div style={mobileStyles.imageContainer}>
                <img
                  src={slides[currentSlide].src}
                  alt="img"
                  style={mobileStyles.image}
                />
              </div>
              <div className="text-left md:pt-2 pt-3 pl-2">
                <h4 className="font-bold lg:text-[16px] text-[10px] text-ash text-center text-white">
                  {slides[currentSlide].title}
                </h4>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row lg:justify-around gap-2 p-2 lg:px-10">
          {slides.map((slide, index) => (
            <div key={index} className="flex flex-col items-center gap-2 shadow-2xl cursor-pointer">
              <div className="relative xxl:w-[348px] lg:w-[240px] md:w-[348px] md:h-[229px] w-[140px] h-[75px] md:w-[348px] md:h-[200px] rounded-[6px] overflow-hidden group">
                <img
                  src={slide.src}
                  alt="img"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left md:pt-2 pt-3 pl-2">
                <h4 className="font-bold lg:text-[16px] text-[10px] text-ash text-center text-white">
                  {slide.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OurWork;
