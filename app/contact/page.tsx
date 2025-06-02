import Element3D from "@/components/3D";
import Navbar from "@/components/Navbar";
import React from "react";

const ContactPage = () => {
  return (
    <div className="overflow-hidden bg-transparent">
      <div className="w-[1440px] h-[1481px] relative bg-transparent shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden">
        <div className="left-[154px] top-[212px] absolute text-center justify-start text-white text-6xl font-semibold font-['Poppins']">
          Contact Us
        </div>
        <div className="left-[154px] top-[341px] absolute text-center justify-start text-white text-xl font-medium font-['Poppins']">
          Ask us anything... we are here(well, anything that concerns us ;){" "}
        </div>
        <div className="left-[154px] top-[432px] absolute text-center justify-start text-white text-xl font-medium font-['Poppins']">
          Personal Information
        </div>
        <div className="w-10 h-0 left-[154px] top-[462px] absolute  outline-2 outline-offset-[-1px] outline-white" />
        <div className="w-10 h-0 left-[153px] top-[785px] absolute  outline-2 outline-offset-[-1px] outline-white" />
        <div className="w-[556px] h-16 left-[154px] top-[522px] absolute bg-zinc-700/40 rounded-[50px] border-2 border-neutral-600 backdrop-blur-[20px]" />
        <div className="left-[179px] top-[498px] absolute justify-start text-white text-xl font-normal font-['Poppins'] leading-snug">
          Name*
        </div>
        <div className="left-[196px] top-[542px] absolute justify-start text-neutral-600 text-xl font-normal font-['Poppins'] leading-snug">
          what should we call you...
        </div>
        <div className="w-[556px] h-16 left-[730px] top-[522px] absolute bg-neutral-500/20 rounded-[505px] border-2 border-neutral-600 backdrop-blur-3xl" />
        <div className="left-[755px] top-[498px] absolute justify-start text-white text-xl font-normal font-['Poppins'] leading-snug">
          Email*
        </div>
        <div className="left-[772px] top-[542px] absolute justify-start text-neutral-600 text-xl font-normal font-['Poppins'] leading-snug">
          Placeholder
        </div>
        <div className="w-[556px] h-16 left-[730px] top-[635px] absolute bg-zinc-700/40 rounded-[50px] border-2 border-neutral-600 backdrop-blur-[20px]" />
        <div className="left-[755px] top-[611px] absolute justify-start text-white text-xl font-normal font-['Poppins'] leading-snug">
          Pincode*
        </div>
        <div className="left-[772px] top-[655px] absolute justify-start text-neutral-600 text-xl font-normal font-['Poppins'] leading-snug">
          Place holder
        </div>
        <div className="w-[556px] h-16 left-[154px] top-[635px] absolute bg-zinc-700/40 rounded-[50px] border-2 border-neutral-600 backdrop-blur-[20px]" />
        <div className="left-[179px] top-[611px] absolute justify-start text-white text-xl font-normal font-['Poppins'] leading-snug">
          Phone No.
        </div>
        <div className="left-[196px] top-[655px] absolute justify-start text-neutral-600 text-xl font-normal font-['Poppins'] leading-snug">
          Place holder
        </div>
        <div className="left-[154px] top-[758px] absolute justify-start text-white text-xl font-normal font-['Poppins'] leading-snug">
          Write to us
        </div>
        <div className="w-[1132px] h-96 left-[154px] top-[821px] absolute bg-stone-900 rounded-[20px] border-2 border-blue-600/20 backdrop-blur-[80.75px]" />
        <div className="left-[175px] top-[846px] absolute justify-start text-neutral-600 text-xl font-normal font-['Poppins']">
          Ask us and we’ll get to it
        </div>
        <div className="w-52 h-20 px-9 py-4 left-[152px] top-[1330px] absolute bg-white rounded-[47.50px] inline-flex justify-center items-center gap-2.5">
          <div className="justify-start text-black text-2xl font-semibold font-['Poppins']">
            Send
          </div>
          <div className="w-8 h-8 relative overflow-hidden">
            <div className="w-3.5 h-3.5 left-[9.57px] top-[9.79px] absolute bg-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
