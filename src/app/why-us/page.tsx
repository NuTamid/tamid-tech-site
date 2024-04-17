// pages/why-us.js
import Head from 'next/head';
const WhyUsPage = () => {
  return (
    <div className="bg-black text-white py-8 pb-[600px]">
      <Head>
        <title>Why Us - TAMID Group at Northeastern University</title>
      </Head>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <h1 className="text-5xl font-bold mb-4">Why Join Us</h1>
        <br></br>
        <h2 className='text-1.5xl font-bold mb-4'>Real Projects for Real Companies</h2>
        <p className="mb-4 relative z-10">
        One of the core benefits of joining our track is the opportunity to work on legitimate projects for real companies. This means the code you write and the solutions you develop are not hypothetical exercises; they are critical components that companies integrate into their operations. This direct exposure to the business side of software development provides a profound understanding of how technology impacts business strategies and outcomes, making your work meaningful and your experiences highly relevant to future employment.
        </p>
        <h2 className='text-1.5xl font-bold mb-4'>A Learning Hub of Technology and Innovation</h2>
        <p className="mb-4 relative z-10">
        Our community is deeply committed to fostering a learning environment where innovation thrives. You will collaborate with peers who are equally passionate about tech and driven to explore new possibilities. Regular workshops, seminars, and guest lectures with industry leaders are integral parts of our curriculum, keeping you updated with the latest trends and technologies. This vibrant educational atmosphere is perfect for any developer eager to make a mark in the tech world.
        </p>
        <br></br>
        <br></br>
        <h1 className="text-5xl font-bold mb-4">Why Work With Us</h1>
        <br></br>
        <h2 className='text-1.5xl font-bold mb-4'>Access to Elite, Driven Talent</h2>
        <p className="mb-4 relative z-10">
        Companies partnering with the Tech Consulting Track at TAMID Northeastern gain access to a pool of motivated, skilled, and innovative developers ready to contribute to your projects. Our students are trained in the latest technologies and are eager to apply their knowledge to real-world problems. They bring fresh perspectives that can challenge conventional approaches and lead to breakthrough innovations in your projects.</p>
        <h2 className='text-1.5xl font-bold mb-4'>Flexible, Impactful Collaboration</h2>
        <p className="mb-4 relative z-10">
        Working with us means more than just outsourcing project work; it's about engaging in a partnership that fosters mutual growth. Our teams are adaptable and equipped to handle various aspects of tech development, from initial design to final product launch. Whether you need a fresh set of eyes on a tricky problem or additional hands to scale quickly, our students are prepared to meet your needs effectively. Partnering with us ensures that you not only achieve your immediate goals but also invest in nurturing potential future leaders who understand the essence of your business.</p>
      </div>
      <div className="z-0 absolute opacity-30 bg-gradient-radial from-orange-400 via-black to-black w-3/4 h-[300px] lg:h-[800px]" style={{ right: '-300px', bottom: '-250px' }} />
    </div>
  );
};
export default WhyUsPage;