import React from "react";

const Services = () => {
  return (
    <div className=" bg-black items-center justify-center flex-col h-screen w-full">
      <div className="absolute left-36 mt-26">
        <div className="mb-7">
          <p className="text-white text-2xl">Services</p>
          <span className="h-[2.5px] w-[42px] bg-white block"></span>
        </div>

        <div className="text-6xl text-white font-[Poppins] font-semibold w-auto mt-15">
          We Provide the best
          <br /> service, without Revision
          <br />
          Restrictions out of the
          <br />
          box.
        </div>
        <div className="w-96 h-80 relative mt-7 gap-8">
          {/* <div className="w-80 h-10 left-0 top-0 absolute justify-start">
            <span className="text-white text-5xl font-medium font-['Poppins'] leading-[55px]">
              UI
            </span>
            <span className="text-white text-4xl font-medium font-['Poppins'] leading-10">
              /
            </span>
            <span className="text-white text-5xl font-medium font-['Poppins'] leading-[55px]">
              Ux Design
            </span>
          </div>
          <div className="w-52 h-0 left-0 top-[59.72px] absolute  outline-1 outline-offset-[-0.50px] outline-white" />
          <div className="w-96 h-10 left-0 top-[97.63px] absolute justify-start text-white text-5xl font-medium font-['Poppins'] leading-[55px]">
            Graphic Design
          </div>
          <div className="w-52 h-0 left-0 top-[159.10px] absolute  outline-1 outline-offset-[-0.50px] outline-white" />
          <div className="w-96 h-10 left-0 top-[287.21px] absolute justify-start text-white text-5xl font-medium font-['Poppins'] leading-[55px]">
            Brand Identity
          </div>
          <div className="w-52 h-0 left-0 top-[340px] absolute  outline-1 outline-offset-[-0.50px] outline-white" />
          <div className="w-80 h-10 left-0 top-[197.16px] absolute justify-start text-white text-5xl font-medium font-['Poppins'] leading-[55px]">
            Video Editing
          </div>
          <div className="w-52 h-0 left-0 top-[249px] absolute  outline-1 outline-offset-[-0.50px] outline-white" /> */}
          <div className="service-item"> UI/UX Design </div>
          <div className="service-item"> Video Editing </div>
          <div className="service-item"> Graphic Design</div>
          <div className="service-item"> Brand Identity</div>

        </div>
      </div>
    </div>
  );
};

export default Services;
