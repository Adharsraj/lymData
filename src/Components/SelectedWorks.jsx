import React from "react";
import work1 from "../assets/Images/works/IMAGE (12).png";
import { BsArrowRight } from "react-icons/bs";
import { worksData } from "../assets/Data/data";

const SelectedWorks = () => {
  return (


    <div className="max-w-[1640px] mx-auto p-4 font-roboto grid justify-center mb-20  gap-8">
        {worksData.map((m)=>(

      <div className="md:hidden">
        <div className="flex flex-col items-center relative">
          <span className="text-4xl mx-auto font-times mb-8 mt-10">
            {m.title}
          </span>
          <img src={m.img} alt="chimp" />
          <div className="w-[132px] h-[63px] mt-12 mb-6 bg-[#F2F626] hover:-rotate-45 transition-transform absolute top-[260px]">
            <span className="flex justify-end">
              <BsArrowRight size={30} />
            </span>
            <h1 className="flex justify-center">View Project</h1>
          </div>
        </div>
        <div>
          <h1 className="w-[290px] mt-10 mb-3 text-center ">
            {m.mainhead}
          </h1>
        </div>
        <div>
          <h1 className="w-[290px] text-center border-b-2 border-b-slate-200 ">
          {m.head1}
          </h1>
          <h1 className="w-[290px] text-center border-b-2 border-b-slate-200">
          {m.head2}
          </h1>
          <h1 className="w-[290px]  text-center  ">
          {m.head3}
          </h1>
        </div>
      </div>
      ))}




{worksData.map((m)=>(


      <div className="hidden md:grid md:grid-cols-3 items-center ">
        
        <div className="mt-24 w-[200px] lg:w-[300px] md:text-xl">
          <h1 className=" text-center border-b-2 border-b-slate-200 ">
 {m.head1}
          </h1>
          <h1 className=" text-center border-b-2 border-b-slate-200">
          {m.head2}
          </h1>
          <h1 className="  text-center  ">
          {m.head3}
          </h1>
        </div>

        <div className="flex flex-col items-center relative">
          <span className="text-4xl mx-auto font-times mb-8 mt-10 lg:mt-20 lg:text-5xl">
          {m.title}

          </span>
          <img className="w-[300px] lg:w-[400px]" src={m.img} alt="chimp" />
          <div className="w-[132px] h-[63px] mt-12 mb-6 bg-[#F2F626] hover:-rotate-45 transition-transform absolute top-[330px] lg:top-[560px]">
            <span className="flex justify-end">
              <BsArrowRight size={30} />
            </span>
            <h1 className="flex justify-center">View Project</h1>
          </div>
        </div>

        <div>
          <h1 className="mt-20 text-center w-[200px] ml-8 lg:w-[250px] md:text-xl lg:ml-20">
{m.mainhead}
          </h1>
        </div>

      </div>
      ))}
    </div>
  );
};

export default SelectedWorks;
