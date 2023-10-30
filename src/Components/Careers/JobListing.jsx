// import React from "react";
// import { BsArrowRight } from "react-icons/bs";

// const JobListing = () => {
//   return (
//     <div className="max-w-[1640px] mx-auto p-4 text-[#040404] mb-10">
//       <div className="flex  justify-between p-3 w-[300px] md:w-[450px] lg:w-[600px] lg:text-xl mx-auto">
//         <div className="w-[150px] md:w-[350px]  md:text-lg lg:text-xl">
//           <h1>OPEN APPLICATION</h1>
//           <h3 className="mt-3">India / Remote</h3>
//         </div>

//         <div className="w-[150px] md:w-[350px] md:text-lg ">
//           <h2>
//             We're not actively hiring at the moment, but always looking for
//             great people to collaborate with.
//           </h2>
//           <div className="w-[102px] h-[53px] mt-2 mb-6 bg-[#262626] text-white hover:-rotate-45 transition-transform">
//             <span className="flex justify-end">
//               <BsArrowRight size={30} />
//             </span>
//             <h1 className="flex justify-center">Get in touch</h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobListing;










import React from "react";

const JobListing = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 text-[#040404] mb-10">
      <div className="lg:flex">

      <div className="lg:w-[300px]">
        <h1>Are you ready for exciting new challenges?</h1>
        <h1>open positions</h1>
      </div>
      <div className="flex lg:w-full lg:pl-20 justify-between gap-5 mt-5 border-t pt-3 border ">
        <div className="flex gap-5">
        <h1>01</h1>
        <h2>Product Design Lead - proyectos de Blockchain 🚀</h2>
        </div>
        <h1>+</h1>
      </div>
      </div>

    </div>
  );
};

export default JobListing;