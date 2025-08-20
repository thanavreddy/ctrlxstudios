import Link from "next/link";
import React from "react";


interface WorkCardsProps {
  id : number;
  title: string;
  category:string;
  image:string;
  link:string;
  altText:string
}
const NewWorkCard = () => {
  return (
    <div>
      <div className="relative group overflow-hidden rounded-2xl shadow-lg">
        {/* Card Image */}
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop"
          alt=""
          className="w-full h-full object-cover scale-110 transition-transform duration-500 group-hover:scale-100 hover:cursor-pointer"
        />

        {/* Overlay */}
        
        <div
          className="absolute inset-0  flex flex-col justify-end p-6  
                  translate-y-full group-hover:translate-y-0 
                  transition-transform duration-500 ease-in-out  "
        >
          <div className="bg-black/80 py-4 border-blue-300 border rounded-full px-3 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white ml-8">ProtiQ</h3>
          <Link className="text-sm  ml-8 mr-4 text-blue-400" href={""} >View Project</Link>
        </div>
        </div>
        </div>

    </div>
  );
};

export default NewWorkCard;
