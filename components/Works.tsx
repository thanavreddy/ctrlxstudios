"use client";
import Link from "next/link";
import React from "react";
import { useRef } from "react";
import Image from "next/image";

const Works = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <section className="relative h-[100vh] ">
      <div className="absolute left-36 mt-22 mb-6">
        <div className="mb-7">
          <p className="text-white text-2xl">Works</p>
          <span className="h-[2.5px] w-[42px] bg-white block"></span>
        </div>
        <div className="mt-15 ">
        <h1 className="md:text-6xl text-5xl text-white font-[Poppins] font-semibold">
          Agility and Experience
          
          
        </h1>
        <div className="flex items-center mt-2 space-x-4">
            <h1 className="md:text-6xl text-5xl font-[Poppins] font-semibold">to Create</h1>
          <span className="w-12 h-1.5 bg-white border-white block" ></span>
           <h1 className="md:text-6xl text-5xl font-[Poppins] font-semibold " >the Unexpected{" "}</h1>
          </div>
        </div>
      </div>
      <div className="absolute right-2  rounded-3xl backdrop-blur-md  bottom-2 w-[75%] h-[50%] flex items-center  ">
      <div className="w-full flex items-center space-x-4 h-[90%]  ">
        <div className=" w-[30%]  rounded-3xl m-3 border-white border-1   min-h-full flex flex-col items-center text-center justify-evenly ">

          <h1 className="text-2xl font-semibold font-[Poppins] mt-5">This Website</h1>
          <Image src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width={300} height={300} alt={""} />
          <Link href='#' className="hover:underline-offset-8">Know More</Link>
    

        </div>
        <div className=" w-[30%]  rounded-3xl m-3 border-white border-1   min-h-full flex flex-col items-center text-center justify-evenly ">

          <h1 className="text-2xl font-semibold font-[Poppins] mt-5">Design of this website</h1>
          <Image src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width={300} height={300} alt={""} />
          <Link href='#' className="hover:underline-offset-8 ">Know More</Link>
    

        </div>
        <div className=" w-[30%]  rounded-3xl m-3 border-white border-1   min-h-full flex flex-col items-center text-center justify-evenly ">

          <h1 className="text-2xl font-semibold font-[Poppins] mt-5">Salaar 1 Year Special Video</h1>
          <Image src="https://www.thestatesman.com/wp-content/uploads/2023/11/Salaar.jpg" width={300} height={300} alt={""} />
          <Link href='#' className="hover:underline-offset-8">Know More</Link>
    

        </div>
        <div className=" w-[30%]  rounded-3xl m-3 border-white border-1   min-h-full flex flex-col items-center text-center justify-evenly ">

          <h1 className="text-2xl font-semibold font-[Poppins] mt-5">New Clothing Brand</h1>
          <Image src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width={300} height={300} alt={""} />
          <Link href='#' className="hover:underline-offset-8">Know More</Link>
    

        </div>
        
      </div>
      </div>
    </section>
  );
};

export default Works;
