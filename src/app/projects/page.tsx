import React from 'react';
import Project from '@/components/Project';

const ProjectsPage = () => {
  const Projects = [
    {
      imagePath: "/image.jpg",
      title: "GiftPicker",
      techStack: ['HTML', 'CSS', 'JavaScript', 'React'],
      text:"The project aims to utilize user experience expertise to enhance the GiftSwapper platform by creating an attractive, interactive prototype and refining user flow. The goal is to ensure the prototype aligns with user needs, is user-friendly, and fits within Presently development direction. Website Link: https://giftpicker.io/"
    },
    {
      imagePath: "/image.jpg",
      title: "VComm",
      techStack: ['Python', 'React.JS', 'Tailwind CSS', 'MongoDB'],
      text:"VComm is a system designed to gather, analyze, and derive insights from scooter data. It combines IoT technology, machine learning algorithms, and GPS tracking to understand rider behavior and usage patterns. Utilizing SIM cards for data transmission and React-based web interfaces, it provides real-time analytics accessible via API, empowering stakeholders with valuable insights for decision-making. The project developed a scoring system to assess rider behavior and scooter performance, created an intuitive interface for easy data exploration and interaction, and implemented analytics to extract valuable insights from geographical data."
    },
    {
      imagePath: "/image.jpg",
      title: "InvisEye",
      techStack: ['mySQL', 'Excel', 'HTML', 'CSS', 'React.JS'],
      text:"An AI-powered software used to source, predict, and manage candidates applying to a firm. The platform predicts human behavior to streamline and complete the talent acquisition cycle. Source code for an interactive front-end analytical report that integrates with existing analytics software. Deliverable is a script which can extract data from SQL database and AI model and relay in a report. Along with this report, we have designed how the report UI will look and how information will be displayed. Company Website: https://inviseye.io/"
    },
    {
      imagePath: "/image.jpg",
      title: "ALIA",
      techStack: ['TypeScript', 'GPT-3.5'],
      text:"Backend software leveraging GPT generation to power a Shopify pop-up for small businesses to educate customers for incentives. The project improves current prompt engineering processes related to the creation of educational slides and a survey, utilizes GPT 3.5 API to analyze the ‘about us’ section of different small business websites, automate current processes that require the user to input the website url, instead of automatically reading the different pages that make up the business’s website, and runs data analytics processes to understand what makes a successful pop-up, and how merchants can capitalize on their customer’s screen time. Company Website: https://www.alialearn.com/"
    },
    {
      imagePath: "/image.jpg",
      title: "Recruitment Dashboard",
      techStack: ['Python', 'NLP', 'Data Cleaning'],
      text:"The TAMID Internal Recruitment Application Analysis and Dashboard is a comprehensive solution designed to streamline our recruitment process by leveraging machine learning techniques to analyze candidate applications with increased efficiency and accuracy. The project included a trained ML model for application analysis, a sentiment analysis module integrated into the toolkit, an algorithm for generating brief summaries of application responses, and a predictive scoring system implemented within the system."
    },
    {
      imagePath: "/image.jpg",
      title: "Invictuss",
      techStack: ['Tailwind CSS', 'TypeScript', 'Next.js', 'Vercel'],
      text:"Invictuss is a dynamic full-stack front-end web development project that leveraged Figma to design a visually appealing and intuitive user interface, implemented Tailwind CSS to streamline the styling and achieve consistent design aesthetics, leveraged the React framework to develop interactive and dynamic user interfaces, ensured cross-device compatibility and responsiveness, and employed version control using Git for efficient collaboration. Website Link: https://invictuss.io/"
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
              text={project.text}  
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectsPage;