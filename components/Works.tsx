

'use client'
import React from "react";
import { useRef } from "react";
const Works = () => {


    const sectionRef = useRef<HTMLDivElement>(null);
  
  return (
    <section ref={ sectionRef} className="relative h-[100vh]">
    <div className="w-[100%] h-[1024px] relative bg-transparent overflow-hidden mt-12">
      <div className="left-[154px] top-[90px] absolute text-center justify-start text-white text-xl font-normal font-['Poppins']">
        Our Works
      </div>
      <div className="w-10 h-0 left-[154px] top-[120px] absolute  outline-2 outline-offset-[-1px] outline-white" />
      <div className="w-[1017px] left-[154px] top-[155px] absolute justify-start">
        <span className="text-white text-6xl font-semibold font-['Poppins'] leading-[84.70px]">
          Agility and Experience
          <br />
          to Create{" "}
        </span>
        <span className="text-white text-6xl font-semibold font-['Poppins'] leading-[84.70px] w-[89px] h-[11px]">
          
        </span>
        <span className="text-white text-6xl font-semibold font-['Poppins'] leading-[84.70px]">
          the unexpected
        </span>
      </div>
      
    </div>
    </section>
  );
};

export default Works;
