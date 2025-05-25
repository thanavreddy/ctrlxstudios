import React from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="self-stretch px-10 py-14 inline-flex justify-between items-center overflow-hidden w-full bg-white">
      <div className="w-28 h-12 text-center justify-start text-black text-4xl font-semibold font-['Poppins']">
        <Link href={"/"}>CtrlX</Link>
      </div>
      <div className="w-24 h-12 relative">
        <Link href={"/"} >
        <Image src="./menu.svg" alt={"menu"} width={95} height={45}/></Link>
      </div>
    </div>
  );
};

export default Navbar;
