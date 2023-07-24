import React from "react";
import { useEffect, useRef } from "react";

const IndustriesWeknowdhn = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2;
    }
  }, []);

  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="grid md:flex md:items-center gap-4">
        <div className="col-span-3 md:col-span-1">
          <h1 className="font-mono lg:mb-20 text-sm">
            Industries we know <br /> and understand
          </h1>
          <h2 className="text-7xl lg:mb-10 lg:text-8xl xl:text-[190px] font-bold">
            experi <br /> ence
          </h2>
          <img className="lg:ml-20 animate-bounce" src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187585/assets/assets/asset_41_bkjksi.svg" alt="" />
        </div>

        <div
          className="relative col-span-3 md:col-span-1"
          style={{ zIndex: "-1" }}
        >
          <video
            className="w-full h-full object-cover filter"
            src="https://res.cloudinary.com/db5gkedee/video/upload/v1690187577/assets/Videos/home-phones_gkoiuf.mp4"
            autoPlay
            loop
            muted
            ref={videoRef}
          ></video>
        </div>

        <div className="col-span-3 md:col-span-1">
          <img
            className="lg:mt-[-90px] lg:mb-20 hover:animate-spin"
            src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187633/assets/assets/asset_61_jtdinc.svg"
            alt="star"
            style={{ animationDuration: "3s" }}
          />
          <h1 className="font-semibold text-2xl mt-2 mb-2 lg:mb-10">
            We know what we're doing
          </h1>
          <h2>
            We have spent 15+ years creating and re-creating digital solutions
            and learned what makes great businesses stay in business.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default IndustriesWeknowdhn;
