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
        <div className="flex flex-col justify-center w-[95%] h-[30rem] py-2 md:py-4 px-8 md:px-10 bg-white bg-opacity-5 shadow-lg rounded-xl border-2 border-opacity-50 border-gradient-to-r border-[#00A7EF] to-white">
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
            <h3 className="text-left text-white text-3xl font-semibold mb-4 mt-4">{title}</h3>
            <div className="flex flex-wrap">
           {techStack.map((tech, index) => (
            <span
              key={index}
              className="inline-block border border-gradient-to-r from-border-[#C3D0C3] border-[#00DD31] bg-transparent rounded-xl px-3 py-1 text-white mr-2 mb-12"
            >
              {tech}
            </span>
          ))}
        </div>
        </div>
    </div>
  );
};

export default Project;