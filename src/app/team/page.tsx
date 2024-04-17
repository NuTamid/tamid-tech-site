import UnderConstruction from "@/components/UnderConstruction"

const tamidColors = ['#B4D5E3', '#00B3FF', '#11AEF1'].join(',')
const techColors = ['#FC9639', '#FC6161', '#FC397F'].join(',')

const outlineGradient = {
  borderWidth: '1px', // Set the desired border width
  borderImage: `linear-gradient(to right, ${tamidColors})`, // Define the gradient
  borderImageRepeat: 'round',
  borderImageSlice: '1', 
   // Ensure the entire border gets filled with the gradient
  borderRadius: '0.75rem' // Set the desired border radius
};

const firstOutlineGradient = {
  borderWidth: '1px', // Set the desired border width
  borderImage: `linear-gradient(to right, ${techColors})`, // Define the gradient
  borderImageRepeat: 'round',
  borderImageSlice: '1', 
   // Ensure the entire border gets filled with the gradient
  borderRadius: '0.75rem' // Set the desired border radius
};

const TestimonialSlider = ({ title, testimonials }) => {
  return (
    <div className="text-center">
      <h2 className="text-left text-white text-5xl font-semibold mb-5 mt-5 mx-auto px-8 lg:px-48">{title}</h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((t, i) => (
          <div key={i} className="flex flex-col items-center mx-4 my-8">
            <div style={{ borderColor: t.border }} className="flex justify-center items-center w-52 h-66 md:w-64 md:h-68 rounded-xl border border-opacity-25 bg-white bg-opacity-5 shadow-lg hover:bg-opacity-20 hover:scale-110 duration-300">
              <img src={t.imageSrc} alt={`Picture of ${t.name}`} className="w-[95%] h-[95%]" />
            </div>
            <p className="font-bold text-white text-lg mt-4">{t.name}</p>
            <p className="font-light text-sm text-[#ADBCC2]">{t.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const InfiniteSlider = () => {
  const testimonials = [
    {
      border: "#FC9639",
      imageSrc: "/DSC_9012.jpg",
      name: "Tania Gole",
      title: "Vice President of Tech Consulting",
      text: "#ADBCC2"
    },
    {
      border: "#11AEF1",
      imageSrc: "/DSC_9012.jpg",
      name: "Yuvraj Gohil",
      title: "Co-Director of Tech Consulting",
      text: "#ADBCC2"
    },
    {
      border: "#11AEF1",
      imageSrc: "/DSC_9012.jpg",
      name: "Tanmay Shah",
      title: "Co-Director of Tech Consulting",
      text: "#ADBCC2"
    },
    {
      border: "#11AEF1",
      imageSrc: "/DSC_9012.jpg",
      name: "Jacob Kulik",
      title: "Project Manager",
      text: "#ADBCC2"
    },
    
  ]

  return <TestimonialSlider title="Executive Leadership" testimonials={testimonials} />;
};

const InfiniteSlider1 = () => {
  const testimonials = [
    {
      border: "#11AEF1",
      imageSrc: "/tamid.jpg",
      name: "Kevin Polackal",
      title: "TCF Instructor",
      text: "#ADBCC2"
    },
    {
      border: "#11AEF1",
      imageSrc: "/tamid.jpg",
      name: "Tarun Ari",
      title: "TCF Instructor",
      text: "#ADBCC2"
    },
    {
      border: "#11AEF1",
      imageSrc: "/tamid.jpg",
      name: "Kabir Kathuria",
      title: "TCF Instructor",
      text: "#ADBCC2"
    },
    {
      border: "#11AEF1",
      imageSrc: "/tamid.jpg",
      name: "Gabi Mitchell",
      title: "TCF Teaching Assistant",
      text: "#ADBCC2"
    },

    
  ]


  return <TestimonialSlider title="TC Foundations Instructors" testimonials={testimonials} />;
};

const InfiniteSlider2 = () => {
  const testimonials = [
    {
      border: "#FC9639",
      imageSrc: "/tamid.jpg",
      name: "Jacob Kulik",
      title: "Project Manager",
      text: "#ADBCC2"
    },
    {
      border: "#11AEF1",
      imageSrc: "/tamid.jpg",
      name: "Ayush Rastogi",
      title: "Developer",
      text: "#ADBCC2"
    },
    {
      border: "#11AEF1",
      imageSrc: "/tamid.jpg",
      name: "Greg Laursen",
      title: "Developer",
      text: "#ADBCC2"
    },
    {
      border: "#11AEF1",
      imageSrc: "/tamid.jpg",
      name: "Kevin Polackal",
      title: "Developer",
      text: "#ADBCC2"
    },
  ]

  return <TestimonialSlider title="ALIA" testimonials={testimonials} />;
};

const InfiniteSlider3 = () => {
  const testimonials = [
    {
      border: "#FC9639",
      imageSrc: "/tamid.jpg",
      name: "Tania Gole",
      title: "Project Manager",
      text: "#ADBCC2"
    },
    {
      border: "#FC9639",
      imageSrc: "/tamid.jpg",
      name: "Tanmay Shah",
      title: "Project Manager",
      text: "#ADBCC2"
    },
    {
      border: "#11AEF1",
      imageSrc: "/tamid.jpg",
      name: "Aahil Jubair",
      title: "Developer",
      text: "#ADBCC2"
    },
    {
      border: "#11AEF1",
      imageSrc: "/tamid.jpg",
      name: "Pranav Rana",
      title: "Developer",
      text: "#ADBCC2"
    },
  ]

  return <TestimonialSlider title="InvisEye" testimonials={testimonials} />;
};

const InfiniteSlider4 = () => {
  const testimonials = [
    {
      border: "#11AEF1",
      imageSrc: "/tamid.jpg",
      name: "Meggan Shvartsberg",
      title: "Developer",
      text: "#ADBCC2"
    },
    {
      border: "#11AEF1",
      imageSrc: "/tamid.jpg",
      name: "Adit Karode",
      title: "Developer",
      text: "#ADBCC2"
    },
    {
      border: "#11AEF1",
      imageSrc: "/tamid.jpg",
      name: "Eesha Neunaha",
      title: "Developer",
      text: "#ADBCC2"
    },
    {
      border: "#11AEF1",
      imageSrc: "/tamid.jpg",
      name: "Naisha Mistry",
      title: "Developer",
      text: "#ADBCC2"
    },
  ]

  return <TestimonialSlider title="TC Website Project" testimonials={testimonials} />;
};

const TeamPage = () => {
  return (
    <>
  <main>

        <h1 className="text-left text-white text-5xl font-semibold mb-5 mt-5 mx-auto px-8 lg:px-48">Our Team & Projects</h1> 
        <h2 className="text-left text-white text-xl mb-10 mt-10 mx-auto px-8 lg:px-48">With over 300 hgit ours of professional experience, our team at TAMID Tech excels in delivering innovative, data-driven solutions to meet diverse business needs</h2> 
      
      <div className="mb-28 ml-30 mr-30">
        <InfiniteSlider />
        <InfiniteSlider1 />
        <InfiniteSlider2 />
        <InfiniteSlider3 />
        <InfiniteSlider4 />
      </div>
      </main>
    </>
  )
}

export default TeamPage