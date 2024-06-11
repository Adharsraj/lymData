import React from "react";
import { OurTopClients } from "../../assets/Data/data";

const Marquee = () => {
  const clientCount = OurTopClients.length;
  const marqueeWidth = 250 * 2 * clientCount + (8 * (clientCount * 2 - 1));

  return (
    <div className="bg-black py-14" data-scroll-section>
      <div className="flex overflow-hidden relative">
        <div 
          className="flex animate-loop-scroll gap-32"
          style={{ width: marqueeWidth + 'px', animationDuration: `${30 * (clientCount / 5)}s` }}
        >
          {OurTopClients.concat(OurTopClients).map((i, index) => (
            <img
              key={index}
              className={`fixed-dimensions grayscale border-logo`}
              src={i.img}
              alt={`Client ${index % OurTopClients.length + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
