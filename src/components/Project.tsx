"use client"

import React from 'react';
import Image from 'next/image';

interface ProjectProps {
  imagePath: string;
  title: string;
  techStack: string[];
}

const Project: React.FC<ProjectProps> = ({ imagePath, title, techStack }) => {
  return (
    <div>
        <div className="flex flex-col justify-center h-[10.5rem] w-[30rem] md:w-[30rem] md:h-[30rem] py-2 md:py-4 px-8 md:px-10 bg-white bg-opacity-5 shadow-lg rounded-xl border border-opacity-50 border-[00A7EF] ">
            <div className="w-full md:w-64 h-64 md:h-auto rounded-md overflow-hidden">
                <Image
                src= {imagePath}
                alt="Image of Project"
                width = {444}
                height = {371}
                className="object-cover w-full h-full"
                />
            </div>
        </div>
        <div>
            <h3 className="text-left text-white text-2xl font-semibold mb-3 mt-3">{title}</h3>
            <div className="flex flex-wrap">
           {techStack.map((tech, index) => (
            <span
              key={index}
              className="inline-block border border-gradient-to-r from-[#C3D0C3] to-[#00DD31] bg-transparent rounded-xl px-3 py-1 text-white mr-2 mb-2"
            >
              {tech}
            </span>
          ))}
        </div>
        </div>
    </div>
    // <div className="max-w-xs mx-auto rounded overflow-hidden shadow-lg mb-4">
    //   <img className="w-full" src={image}/>
    //   <div className="px-6 py-4">
    //     <div className="font-bold text-xl mb-2">{title}</div>
    //     <div className="flex flex-wrap">
    //       {techStack.map((tech, index) => (
    //         <span
    //           key={index}
    //           className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
    //         >
    //           {tech}
    //         </span>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
};

// export default Project;

// const Project = ({ image, title, text}) => {
//     return (
//         <div className="flex flex-col justify-center h-[10.5rem] w-[21rem] md:w-[24rem] md:h-[12rem] py-2 md:py-4 px-8 md:px-10 bg-white bg-opacity-5 shadow-lg rounded-xl border border-opacity-25 border-white">
//             <image>
//             <p className="font-light text-sm text-[#ADBCC2]">{t.name}</p>
//             <p className="font-light text-xs text-[#ADBCC2]">{t.title}</p>
//         </div>
//     );
// }
export default Project;