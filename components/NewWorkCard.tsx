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
      <div className="relative group overflow-hidden rounded-2xl shadow-lg w-full sm:w-[22rem] md:w-[30rem] xl:w-[38rem] h-72 sm:h-80 md:h-96">
        {/* Card Image */}
        <img
          src={project.image}
          alt={project.altText || ""}
          className="w-full h-full object-cover scale-110 transition-transform duration-500 group-hover:scale-100 hover:cursor-pointer"
        />

        {/* Overlay */}
        <div
          className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 md:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"
        >
          <div className="bg-black/10 backdrop-blur-md py-2 sm:py-3 md:py-4 border-blue-300 border rounded-full px-2 sm:px-3 md:px-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white ml-2 sm:ml-4 md:ml-8">{project.title}</h3>
            {project.link ? (
              <Link className="text-xs sm:text-sm ml-2 sm:ml-4 mr-2 sm:mr-4 text-blue-400" href={project.link} >View Project</Link>
            ) : (
              <span className="text-xs sm:text-sm ml-2 sm:ml-4 mr-2 sm:mr-4 text-gray-400 cursor-not-allowed" title="No link available">View Project</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewWorkCard;
