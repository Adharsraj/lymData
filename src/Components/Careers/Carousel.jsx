import React, { useState } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + numSlides) % numSlides);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % numSlides);
  };

  const numSlides = 3; // Number of slides

  return (
    <div className="max-w-[1640px] relative mx-auto p-4  pt-20 text-[#040404]">
      <div className=" border border-black h-[150px] rounded-full">
        {currentSlide === 0 && (
          <div className='grid  h-full grid-cols-2'>
            <div className=' flex items-center justify-center  '>image here</div>
            <div>
            <p>01/05</p>
            <p>people meeting</p>
            </div>
          </div>
        )}
        {currentSlide === 1 && (
           <div className='grid  h-full grid-cols-2'>
           <div className=' flex items-center justify-center  '>image here</div>
           <div>
           <p>02/05</p>
           <p>people meeting</p>
           </div>
         </div>
        )}
        {currentSlide === 2 && (
           <div className='grid  h-full grid-cols-2'>
           <div className=' flex items-center justify-center  '>image here</div>
           <div>
           <p>03/05</p>
           <p>people meeting</p>
           </div>
         </div>
        )}
      </div>
      <div className='flex gap-5'>

      <button onClick={prevSlide}>Previous</button>
      <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;