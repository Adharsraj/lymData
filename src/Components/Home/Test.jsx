import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

const Test = () => {
  const divRef = useRef(null);

  useEffect(() => {
    // if (divRef.current) {
    //   gsap.to(divRef.current, { clipPath: 'circle(50% at 50% 100% )', duration: 1 });
    // }
    // gsap.from("h6 div",1.5,{
    //     yPercent:100,
    //     ease:"power4.inOut",
    //     stagger:{
    //         amount:0.5,
    //     },
    // })
    // gsap.to("h6",1.5,{
    //     clipPath:"polygon(0 0,100% 0,100% 100%,0% 100%)",
    //     ease:"power4.inOut",
    //     stagger:{
    //         amount:0.5
    //     }

    // })
  }, []);

  return (
    <>
    <div ref={divRef} className='overflow-hidden text-9xl text-center'>
      Test
    </div>
    <div className='overlay'>
        <div className='col'>
            <h6><div>visual photographer</div></h6>
            <h6><div>visual photographer</div></h6>
            <h6><div>visual photographer</div></h6>
        </div>
        <div className='col'>
            <h6>
                <div><span>click</span>anywhere to continue</div>
            </h6>
        </div>

    </div>
    </>

  );
};

export default Test;
