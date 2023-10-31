// import React from "react";
// const CareerIntro = () => {
//   return (
//     <div className="max-w-[1640px] mx-auto p-4  text-[#040404] ">
//       <span className="text-5xl mt-32 md:text-7xl lg:text-9xl flex justify-center text-center font-roboto uppercase  w-[200px] mx-auto">
//         Creative, curious, friendly & talented?
//       </span>
//       <div className="mt-8 md:grid md:grid-cols-4 md:gap-4">
//         <video
//           className="w-full hidden md:flex h-full object-cover filter blur-xl"
//           style={{ transform: "scaleX(-1)" }}
//           src="https://res.cloudinary.com/https-www-lymdata-com/video/upload/v1691417086/LYMDATALABS/Pages/Careers/careers_ypgzvs_pjdiqg.mp4"
//           autoPlay
//           loop
//           muted
//         ></video>
//         <video
//           className="w-full h-full object-cover col-span-2"
//           src="https://res.cloudinary.com/https-www-lymdata-com/video/upload/v1691417086/LYMDATALABS/Pages/Careers/careers_ypgzvs_pjdiqg.mp4"
//           autoPlay
//           loop
//           muted
//         ></video>
//         <video
//           className="w-full h-full hidden md:flex object-cover filter blur-xl"
//           style={{ transform: "scaleX(-1)" }}
//           src="https://res.cloudinary.com/https-www-lymdata-com/video/upload/v1691417086/LYMDATALABS/Pages/Careers/careers_ypgzvs_pjdiqg.mp4"
//           autoPlay
//           loop
//           muted
//         ></video>
//       </div>
//       <h1 className="w-[300px] md:w-[450px] lg:w-[590px] text-lg md:text-2xl   mx-auto mt-12 font-times">
//       LYM Data Labs is a team of designers, developers, strategists, copywriters and
//         producers brought together by good fortune, great clients, and a shared
//         drive to make amazing things. Individually, we’re great; together, we
//         become extraordinary.
//       </h1>
//     </div>
//   );
// };

// export default CareerIntro;









import React from "react";
import img from "../../assets/Career.jpeg";
const CareerIntro = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4  pt-20 text-[#040404] overflow-hidden ">
      <div className="text-center relative mt-20 md:mt-7">
        <div className="absolute top-[-20%] md:top-[20%] w-full text-8xl md:text-9xl md:leading-[80px] font-aeonic">
        <h2 className="text-6xl px-1 z-20  text-[#282728] xxl:px-20 lg:text-[200px] xxl:text-[260px] md:text-8xl mt-24 lg:mt-14 font-bold absolute">
            Join the
            <h1 className="lg:ml-20 lg:leading-0">—team</h1>
          </h2>
        </div>
        <img className="pt-10 md:w-[500px] xl:w-[700px] xl:h-[890px] lg:w-[520px] mx-auto" src={img} alt="" srcset="" />
      </div>
      <div className="some-ele font-bold">
        <h1 className="mt-10 mb-10 text-2xl xl:text-3xl md:w-[500px] xl:w-[720px] xl:mt-24 mx-auto leading-7">
        As a living, breathing, thriving company, we are constantly on the look for people who like to test their hands at exciting new challenges. 
        </h1>
        <h1 className="text-2xl xl:text-3xl md:w-[500px] xl:w-[720px] mx-auto leading-7">
        Are you one of them? <br />
        Reach out and let’s get to know each other.
        </h1>
      </div>
    </div>
  );
};

export default CareerIntro; 