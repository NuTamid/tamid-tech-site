"use client"
import Image from "next/image"
import "@/styles/Home.css"
import "@/styles/Animations.css"
import Link from "next/link"
import { useInView } from 'react-intersection-observer';

const tamidColors = ['#B4D5E3', '#00B3FF', '#11AEF1'].join(',')
const techColors = ['#FC9639', '#FC6161', '#FC397F'].join(',')

const tamidGradient = {
  backgroundImage: `linear-gradient(to right, ${tamidColors})`,
  backgroundSize: '100% auto',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
};

const techGradient = {
  backgroundImage: `linear-gradient(to right, ${techColors})`,
  backgroundSize: '100% auto',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
};


const InfiniteSlider = () => {

  const testimonials = [
    {
      quote: "I choose to come back to TAMID every year because the caliber of talent is just phenomenal.",
      name: "Dalia Katan",
      title: "CEO and Founder of Presently"
    },
    {
      quote: "2 -- I choose to come back to TAMID every year because the caliber of talent is just phenomenal.",
      name: "Dalia Katan",
      title: "CEO and Founder of Presently"
    },
    {
      quote: "3 -- I choose to come back to TAMID every year because the caliber of talent is just phenomenal.",
      name: "Dalia Katan",
      title: "CEO and Founder of Presently"
    },
    {
      quote: "4 -- I choose to come back to TAMID every year because the caliber of talent is just phenomenal.",
      name: "Dalia Katan",
      title: "CEO and Founder of Presently"
    },
    {
      quote: "5 -- I choose to come back to TAMID every year because the caliber of talent is just phenomenal.",
      name: "Dalia Katan",
      title: "CEO and Founder of Presently"
    },
    {
      quote: "6 -- I choose to come back to TAMID every year because the caliber of talent is just phenomenal.",
      name: "Dalia Katan",
      title: "CEO and Founder of Presently"
    },
  ]

  return (
    <div className="flex items-center justify-center h-[14rem]">
      <div className="flex w-[200%] overflow-hidden items-center h-full relative">
        <div className="w-full h-full relative">
          <div className="z-50 w-1/12 left-auto absolute inset-0 bg-gradient-to-r from-transparent via-[#000000b0] via-40% to-black"></div>
          <div className="z-50 w-1/12 absolute inset-0 bg-gradient-to-l from-transparent via-[#000000b0] via-40% to-black"></div>
        </div>

        <div className="infinite-scroll flex items-center justify-around absolute gap-[2rem]">
        {testimonials.map((t, i) => {
            return (
              <div key={i} className="flex flex-col justify-center h-[10.5rem] w-[21rem] md:w-[24rem] md:h-[12rem] py-2 md:py-4 px-8 md:px-10 bg-white bg-opacity-5 shadow-lg rounded-xl border border-opacity-25 border-white md:hover:bg-opacity-20 md:hover:scale-[110%] duration-300">
                <p className="text-[#ADBCC2] mb-4 md:mb-6 font-semibold leading-snug">{t.quote}</p>
                <p className="font-light text-sm text-[#ADBCC2]">{t.name}</p>
                <p className="font-light text-xs text-[#ADBCC2]">{t.title}</p>
              </div>
            );
          })}
        {testimonials.map((t, i) => {
            return (
              <div key={i} className="flex flex-col justify-center h-[10.5rem] w-[21rem] md:w-[24rem] md:h-[12rem] py-2 md:py-4 px-8 md:px-10 bg-white bg-opacity-5 shadow-lg rounded-xl border border-opacity-25 border-white md:hover:bg-opacity-20 md:hover:scale-[110%] duration-300">
                <p className="text-[#ADBCC2] mb-4 md:mb-6 font-semibold leading-snug">{t.quote}</p>
                <p className="font-light text-sm text-[#ADBCC2]">{t.name}</p>
                <p className="font-light text-xs text-[#ADBCC2]">{t.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

}

const HomePage = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <main>
      {/* Hero section */}
      <div className="">
        <div className="flex justify-center">
          <div className="z-0 top-[8.5rem] lg:-top-8 absolute opacity-[0.32] bg-gradient-radial from-orange-400 via-black via-70% to-black w-3/4 h-[300px] lg:h-[800px]" />
          <div className="animate-slide-up relative z-20 mt-24 lg:mt-56 lg:pl-6 text-white text-center font-semibold sm:text-xl md:text-2xl lg:text-3xl pb-4 lg:pb-3">The next era of tech <span className="font-semibold align-top lg:text-2xl">@</span> TAMID Northeastern</div>
        </div>
        <div className="animate-slide-up flex flex-col md:flex-row justify-center lg:pb-16">
          <h1 className="z-10 text-center lg:pr-5 text-[24vw] md:text-[10.5vw] font-bold leading-none tracking-tight" style={tamidGradient}>TAMID</h1>
          <h1 className="z-10 text-center lg:pr-5 text-[24vw] md:text-[10.5vw] font-bold leading-none tracking-tight" style={techGradient}>Tech</h1>
        </div>
        <div className="hidden md:flex animate-slide-up relative z-20">
          <Image
            src="/heroimage.png"
            alt="hero image"
            height={1500}
            width={1500}
            loading="eager"
          />
        </div>
      </div>

      {/* Who are we? */}
      <div className="relative -z-50">
        <div className="absolute overflow-hidden h-[1100px] w-full">
          {/* Mobile bg gradients */}
          <div className="md:hidden z-0 absolute -left-[8rem] -top-[2rem] w-[600px] h-[800px] bg-gradient-radial from-[#8201e5] via-transparent via-70% opacity-[0.25]" />
          <div className="md:hidden z-0 overflow-auto absolute left-[5rem] top-[20rem] w-[800px] h-[700px] bg-gradient-radial from-[#00aaf3] via-[#0071f366] via-50% to-75% opacity-[0.22]" />

          {/* Desktop bg gradients */}
          <div className="hidden md:flex z-0 absolute -left-[36rem] -top-[20rem] w-[1400px] h-[1150px] bg-gradient-radial from-[#8201e5] via-transparent via-70% opacity-[0.18]" />
          <div className="hidden md:flex z-0 overflow-auto absolute left-1/2 transform -translate-x-1/2 w-full h-[1500px] bg-gradient-radial from-[#00aaf3] from-8% via-[#0071f366] via-50% to-75% opacity-[0.34]" />
        </div>
      </div>
      <div className="z-20 lg:px-48">
        <div className="flex justify-center flex-col md:flex-row w-full mt-72 md:mt-56 mb-24 md:mb-[12rem]">
          <h2 className="md:hidden text-center text-white text-5xl font-semibold mb-20">Who are we?</h2>
          <div ref={ref} className="flex justify-center w-full md:w-[350px] h-[270px] md:h-fit relative mb-20 md:mb-0">
            {inView && (
              <object className="flex w-[293px]  md:w-full absolute" type="image/svg+xml" data="/tamidoutlineanimated.svg">
                svg-animation
              </object>
            )}
            <Image src={"/tamidoutline.svg"} alt="tamid" height={350} width={350} priority={true} />
          </div>
          <div className="z-50 md:ml-24 md:w-[70%]">
            <h2 className="hidden md:flex text-white text-5xl font-semibold mb-10">Who are we?</h2>
            <div className="flex justify-center md:justify-normal">
              <div className="md:pl-1 text-[#ADBCC2] w-[85%] md:w-full flex flex-col gap-4 leading-[1.7]">
                <p>
                  We&apos;re a group of students, engineers, and designers operating at the intersection of business and technology.
                </p>
                <p>
                  As part of the&nbsp;
                  <Link href="https://nutamid.org/" className="text-[#00B3FF]" target="_blank">
                    <span className="link linkUnderline linkUnderlineBlack">TAMID @ Northeastern community</span>
                  </Link>
                  , we offer an interdiciplinary approach to product development.
                </p>
                <p>
                  With a wealth of experience in software engineering, research, and consulting, we are dedicated to helping our clients leverage technology to acheive their goals.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <h2 className="text-white text-5xl font-semibold mb-8">Client & Student Testimonials</h2> */}
      </div>
      <div className="mb-28">
        <InfiniteSlider />
      </div>
    </main>
  )
}

export default HomePage