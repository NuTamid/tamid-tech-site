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
      <h1 className="text-left text-white text-5xl font-semibold mb-10 mt-10 mx-auto px-8 lg:px-48">Our Projects</h1>
      {/*Map 6 projects as json --> project coponent
      vertical scrollable
      props: image, title, tech stack (store as list)*/}
      <div className="mx-auto px-8 lg:px-48">
      <Project
        imagePath="/image.jpg"
        title="Sample Project"
        techStack={['HTML', 'React.JS', 'Tailwind CSS', 'MongoDB']}
      />
    </div>

    </>
  )
}

export default ProjectsPage