// "use client"
// import React, { useState, useClient } from 'react';
// import Image from 'next/image';

// interface ProjectProps {
//   imagePath: string;
//   title: string;
//   techStack: string[];
// }

// const Project: React.FC<ProjectProps> = ({ imagePath, title, techStack }) => {
//   const [isHovered, setIsHovered] = useClient(() => useState(false));

//   return (
//     <div
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div className="flex flex-col justify-center w-[95%] h-[30rem] py-2 md:py-4 px-8 md:px-10 bg-white bg-opacity-5 shadow-lg hover:bg-opacity-20 hover:scale-110 duration-300 rounded-xl border-2 border-opacity-50 border-gradient-to-r border-[#00A7EF] to-white">
//         <div className="w-full md:w-64 h-64 rounded-md overflow-hidden">
//           <Image
//             src={imagePath}
//             alt="Image of Project"
//             width={444}
//             height={371}
//             className="object-cover w-full h-full"
//           />
//         </div>
//         <p className={`text-white ${isHovered ? '' : 'hidden'}`}>
//           When you hover over this, a paragraph of text shows up!
//         </p>
//       </div>
//       <div>
//         <h3 className="text-left text-white text-2xl font-semibold mb-4 mt-6">
//           {title}
//         </h3>
//         <div className="flex flex-wrap">
//           {techStack.map((tech, index) => (
//             <span
//               className="inline-block border border-gradient-to-r from-border-[#C3D0C3] border-[#00DD31] bg-transparent rounded-md px-2 py-0.5 text-white text-s md:text-xs mr-2 mb-12"
//               key={index}
//             >
//               {tech}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Project;

// "use client"
// import React, { useState } from 'react';
// import Image from 'next/image';

// interface ProjectProps {
//   imagePath: string;
//   title: string;
//   techStack: string[];
//   text: string;
// }

// const Project: React.FC<ProjectProps> = ({ imagePath, title, techStack, text }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div className="flex flex-col justify-top w-[95%] h-[30 rem] py-4 md:py-6 px-8 md:px-10 bg-white 
//         bg-opacity-5 shadow-lg hover:bg-opacity-20 duration-300
//         rounded-xl border-2 border-opacity-50 border-gradient-to-r border-[#00A7EF] to-white">
//         <div className="w-full md:w-64 h-64 rounded-md overflow-hidden">
//           {/* <Image
//             src={imagePath}
//             alt="Image of Project"
//             width={444}
//             height={371}
//             className="object-cover w-full h-full"
//           /> */}
//         </div>
//         <p className={`text-white ${isHovered ? '' : 'hidden'}`}>
//           {text}
//         </p>
//       </div>
//       <div>
//         <h3 className="text-left text-white text-2xl font-semibold mb-4 mt-6">
//           {title}
//         </h3>
//         <div className="flex flex-wrap">
//           {techStack.map((tech, index) => (
//             <span
//               className="inline-block border border-gradient-to-r from-border-[#C3D0C3] border-[#00DD31] bg-transparent rounded-md px-2 py-0.5 text-white text-s md:text-xs mr-2 mb-12"
//               key={index}
//             >
//               {tech}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Project;

// "use client"
// import React, { useState } from 'react';
// import Image from 'next/image';

// interface ProjectProps {
//   imagePath: string;
//   title: string;
//   techStack: string[];
//   text: string;
// }

// const Project: React.FC<ProjectProps> = ({ imagePath, title, techStack, text }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div className="flex flex-col justify-center w-[95%] h-[30rem] py-4 md:py-6 px-8 md:px-10 bg-white 
//         bg-opacity-5 shadow-lg hover:bg-opacity-20 duration-300
//         rounded-xl border-2 border-opacity-50 border-gradient-to-r border-[#00A7EF] to-white">
//         <div className="w-full md:w-64 h-64 rounded-md overflow-hidden">
//           {/* <Image
//             src={imagePath}
//             alt="Image of Project"
//             width={444}
//             height={371}
//             className="object-cover w-full h-full"
//           /> */}
//         </div>
//         <p className={`text-white ${isHovered ? '' : 'hidden'} mt-0 mb-4`}>
//           {text}
//         </p>
//       </div>
//       <div>
//         <h3 className="text-left text-white text-2xl font-semibold mb-4 mt-6">
//           {title}
//         </h3>
//         <div className="flex flex-wrap">
//           {techStack.map((tech, index) => (
//             <span
//               className="inline-block border border-gradient-to-r from-border-[#C3D0C3] border-[#00DD31] bg-transparent rounded-md px-2 py-0.5 text-white text-s md:text-xs mr-2 mb-12"
//               key={index}
//             >
//               {tech}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Project;

// "use client"
// import React, { useState } from 'react';
// import Image from 'next/image';

// interface ProjectProps {
//   imagePath: string;
//   title: string;
//   techStack: string[];
//   text: string;
// }

// const Project: React.FC<ProjectProps> = ({ imagePath, title, techStack, text }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div className="flex flex-col justify-center max-w-[95%] py-4 md:py-6 px-8 md:px-10 bg-white 
//         bg-opacity-5 shadow-lg hover:bg-opacity-20 duration-300
//         rounded-xl border-2 border-opacity-50 border-gradient-to-r border-[#00A7EF] to-white">
//         <div className="w-full md:w-64 h-64 rounded-md overflow-hidden">
//           {/* <Image
//             src={imagePath}
//             alt="Image of Project"
//             width={444}
//             height={371}
//             className="object-cover w-full h-full"
//           /> */}
//         </div>
//         <p className={`text-white ${isHovered ? '' : 'hidden'} mt-0 mb-4`}>
//           {text}
//         </p>
//       </div>
//       <div>
//         <h3 className="text-left text-white text-2xl font-semibold mb-4 mt-6">
//           {title}
//         </h3>
//         <div className="flex flex-wrap">
//           {techStack.map((tech, index) => (
//             <span
//               className="inline-block border border-gradient-to-r from-border-[#C3D0C3] border-[#00DD31] bg-transparent rounded-md px-2 py-0.5 text-white text-s md:text-xs mr-2 mb-12"
//               key={index}
//             >
//               {tech}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Project;

"use client"
import React, { useState } from 'react';
import Image from 'next/image';

interface ProjectProps {
  imagePath: string;
  title: string;
  techStack: string[];
  text: string;
}

const Project: React.FC<ProjectProps> = ({ imagePath, title, techStack, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`flex flex-col justify-center max-w-[95%] py-4 md:py-6 px-8 md:px-10 bg-white 
        bg-opacity-5 shadow-lg hover:bg-opacity-20 duration-300
        rounded-xl border-2 border-opacity-50 border-gradient-to-r border-[#00A7EF] to-white ${isHovered ? 'pt-6' : ''}`}>
        <div className="w-full md:w-64 h-64 rounded-md overflow-hidden">
          <Image
            src={imagePath}
            alt="Image of Project"
            width={444}
            height={371}
            className="object-cover w-full h-full"
          />
        </div>
        <p className={`text-white ${isHovered ? '' : 'hidden'} mt-0 mb-4`}>
          {text}
        </p>
      </div>
      <div>
        <h3 className="text-left text-white text-2xl font-semibold mb-4 mt-6">
          {title}
        </h3>
        <div className="flex flex-wrap">
          {techStack.map((tech, index) => (
            <span
              className="inline-block border border-gradient-to-r from-border-[#C3D0C3] border-[#00DD31] bg-transparent rounded-md px-2 py-0.5 text-white text-s md:text-xs mr-2 mb-12"
              key={index}
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
