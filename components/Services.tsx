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
