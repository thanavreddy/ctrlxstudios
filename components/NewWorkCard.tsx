import Link from "next/link";
import React from "react";
interface WorkCardsProps {
  id : number;
  title: string;
  category: string[];
  image: string;
  link: string;
  altText: string;
}
const NewWorkCard = (project : WorkCardsProps) => {
  return (
    <div>
      <div className="relative group overflow-hidden rounded-2xl shadow-lg xl:w-[38rem] w-[36rem] h-96">
        {/* Card Image */}
        <img
          src={project.image}
          alt=""
          className="w-full h-full object-cover scale-110 transition-transform duration-500 group-hover:scale-100 hover:cursor-pointer"
        />

        {/* Overlay */}
        
        <div
          className="absolute inset-0  flex flex-col justify-end p-6  
                  translate-y-full group-hover:translate-y-0 
                  transition-transform duration-500 ease-in-out  "
        >
          <div className="bg-black/10 backdrop-blur-md py-4 border-blue-300 border rounded-full px-3 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white ml-8">{project.title}</h3>
            {project.link ? (
              <Link className="text-sm ml-8 mr-4 text-blue-400" href={project.link} >View Project</Link>
            ) : (
              <span className="text-sm ml-8 mr-4 text-gray-400 cursor-not-allowed" title="No link available">View Project</span>
            )}
        </div>
        </div>
        </div>

    </div>
  );
};

export default NewWorkCard;
