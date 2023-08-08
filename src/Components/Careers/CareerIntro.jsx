import React from "react";
const CareerIntro = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4  text-[#040404] ">
      <span className="text-5xl mt-32 md:text-7xl lg:text-9xl flex justify-center text-center font-roboto uppercase  w-[200px] mx-auto">
        Creative, curious, friendly & talented?
      </span>
      <div className="mt-8 md:grid md:grid-cols-4 md:gap-4">
        <video
          className="w-full hidden md:flex h-full object-cover filter blur-xl"
          style={{ transform: "scaleX(-1)" }}
          src="https://res.cloudinary.com/https-www-lymdata-com/video/upload/v1691417086/LYMDATALABS/Pages/Careers/careers_ypgzvs_pjdiqg.mp4"
          autoPlay
          loop
          muted
        ></video>
        <video
          className="w-full h-full object-cover col-span-2"
          src="https://res.cloudinary.com/https-www-lymdata-com/video/upload/v1691417086/LYMDATALABS/Pages/Careers/careers_ypgzvs_pjdiqg.mp4"
          autoPlay
          loop
          muted
        ></video>
        <video
          className="w-full h-full hidden md:flex object-cover filter blur-xl"
          style={{ transform: "scaleX(-1)" }}
          src="https://res.cloudinary.com/https-www-lymdata-com/video/upload/v1691417086/LYMDATALABS/Pages/Careers/careers_ypgzvs_pjdiqg.mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>
      <h1 className="w-[300px] md:w-[450px] lg:w-[590px] text-lg md:text-2xl   mx-auto mt-12 font-times">
      LYM Data Labs is a team of designers, developers, strategists, copywriters and
        producers brought together by good fortune, great clients, and a shared
        drive to make amazing things. Individually, we’re great; together, we
        become extraordinary.
      </h1>
    </div>
  );
};

export default CareerIntro;
