import React from 'react';
import Project from '../../components/Project';

const ProjectsPage = () => {
  const Projects = [
    {
      imagePath: "/image.jpg",
      title: "Project 1",
      techStack: ['HTML', 'React.JS', 'Tailwind CSS', 'MongoDB'],
    },
    {
      imagePath: "/image.jpg",
      title: "Project 2",
      techStack: ['HTML', 'React.JS', 'Tailwind CSS', 'MongoDB'],
    },
    {
      imagePath: "/image.jpg",
      title: "Project 3",
      techStack: ['HTML', 'React.JS', 'Tailwind CSS', 'MongoDB'],
    },
    {
      imagePath: "/image.jpg",
      title: "Project 4",
      techStack: ['HTML', 'React.JS', 'Tailwind CSS', 'MongoDB'],
    },
    {
      imagePath: "/image.jpg",
      title: "Project 5",
      techStack: ['HTML', 'React.JS', 'Tailwind CSS', 'MongoDB'],
    },
    {
      imagePath: "/image.jpg",
      title: "Project 6",
      techStack: ['HTML', 'React.JS', 'Tailwind CSS', 'MongoDB'],
    },
  ];
  
  return (
    <>
      <h1 className="text-left text-white text-6xl font-semibold mb-10 mt-10 mx-auto px-8 lg:px-48">Our Projects</h1>
      <div className="mx-auto px-8 lg:px-48 flex flex-wrap ">
        {Projects.map((project, index) => (
          <div key={index} className="w-[30%] md:w-[30%] mb-4 md:mb-8 mx-2 md:mx-4">
            <Project
              imagePath={project.imagePath}
              title={project.title}
              techStack={project.techStack}   
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectsPage;