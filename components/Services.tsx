import React from "react";

const Services = () => {
  return (
    <div className=" bg-white items-center justify-center flex-col h-screen w-full">
      <div className="absolute left-36 mt-20">
        <div className="mb-7">
          <p className="text-black text-2xl">Services</p>
          <span className="h-[2.5px] w-[42px] bg-black block"></span>
        </div>

        <div className="text-6xl text-black font-[Poppins] font-semibold w-auto mt-15">
          We Provide the best
          <br /> service, without Revision
          <br />
          Restrictions out of the
          <br />
          box.
        </div>
        <p className="text-black text-6xl font-[Poppins] font-semibold self-end"> Ui Ux Design</p>
      </div>
    </div>
  );
};

export default Services;
