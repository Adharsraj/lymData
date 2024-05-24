import React from "react";
import { OurTopClients } from "../../assets/Data/data";

const Marquee = () => {
  return (
    <div className="bg-black py-14" data-scroll-section>
      <div className="flex overflow-hidden relative">
        <div className="flex animate-loop-scroll gap-32">
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
