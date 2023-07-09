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
      quote: "“Sample quote by student, TAMID Member or a past client. The TC Team at TAMID Northeastern have been absolutely incredible!!“",
      name: "Firstname Lastname (Company)"
    },
    {
      quote: "“Sample quote by student, TAMID Member or a past client. The TC Team at TAMID Northeastern have been absolutely incredible!!“",
      name: "Firstname Lastname (Company)"
    },
    {
      quote: "“Sample quote by student, TAMID Member or a past client. The TC Team at TAMID Northeastern have been absolutely incredible!!“",
      name: "Firstname Lastname (Company)"
    },
    {
      quote: "“Sample quote by student, TAMID Member or a past client. The TC Team at TAMID Northeastern have been absolutely incredible!!“",
      name: "Firstname Lastname (Company)"
    },
    {
      quote: "“Sample quote by student, TAMID Member or a past client. The TC Team at TAMID Northeastern have been absolutely incredible!!“",
      name: "Firstname Lastname (Company)"
    },
    {
      quote: "“Sample quote by student, TAMID Member or a past client. The TC Team at TAMID Northeastern have been absolutely incredible!!“",
      name: "Firstname Lastname (Company)"
    },
  ]

  return (
    <div className="flex items-center justify-center h-[12rem]">
      <div className="flex w-[200%] items-center h-full overflow-hidden relative">
        <div className="w-full h-full relative">
          <div className="z-50 absolute inset-0 bg-gradient-to-r from-transparent from-80% via-[#000000dd] via-95% to-black"></div>
          <div className="z-50 absolute inset-0 bg-gradient-to-l from-transparent from-80% via-[#000000dd] via-95% to-black"></div>
        </div>
        
        <div className="infinite-scroll w-[350%] flex items-center justify-around absolute gap-8 left-0">
          {testimonials.map((t) => {
            return (
              <div className="flex flex-col justify-center items-center w-[24rem] h-[12rem] py-4 px-8 bg-white bg-opacity-5 shadow-lg rounded-xl border border-opacity-25 border-white">
                <p className="pb-4 tracking-wide text-white text-lg italic text-center leading-[1.39]">{t.quote}</p>
                <p className="text-[#ADBCC2]">{t.name}</p>
              </div>
            );
          })}
          {testimonials.map((t) => {
            return (
              <div className="flex flex-col justify-center items-center w-[24rem] h-[12rem] py-4 px-8 bg-white bg-opacity-5 shadow-lg rounded-xl border border-opacity-25 border-white">
                <p className="pb-4 tracking-wide text-white text-lg italic text-center leading-[1.39]">{t.quote}</p>
                <p className="text-[#ADBCC2]">{t.name}</p>
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
      <div>
        <div className="flex justify-center">
          <div className="z-0 top-[8.5rem] lg:-top-8 absolute opacity-[0.32] bg-gradient-radial from-orange-400 via-black via-70% to-black w-3/4 h-[300px] lg:h-[800px]" />
          <div className="animate-slide-up relative z-20 mt-24 lg:mt-56 lg:pl-6 text-white text-center font-semibold sm:text-xl md:text-2xl lg:text-3xl pb-4 lg:pb-3">The next era of tech consulting <span className="font-semibold align-top lg:text-2xl">@</span> TAMID Northeastern</div>
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
        <div className="absolute overflow-hidden h-[1270px] w-full">
          <div className="z-0 absolute -left-[36rem] -top-[20rem] w-[1400px] h-[1150px] bg-gradient-radial from-[#8201e5] via-transparent via-70% opacity-[0.18]" />
          <div className="z-0 overflow-auto absolute left-1/2 transform -translate-x-1/2 w-full h-[1500px] bg-gradient-radial from-[#00aaf3] from-8% via-[#0071f366] via-50% to-75% opacity-[0.3]" />
        </div>
      </div>
      <div className="z-20 lg:px-48">
        <div className="flex mt-56 mb-60">
          {/* <Image src={"/tamidoutline.svg"} alt="tamid" height={300} width={300} /> */}
          <div ref={ref} className="w-[575px]">
            {inView && (<object type="image/svg+xml" data="/tamidoutlineanimated.svg">svg-animation</object>)}
          </div>
          <div className="z-50 ml-16">
            <h2 className="text-white text-5xl font-semibold mb-8">Who are we?</h2>
            <div className="pl-1 text-[#ADBCC2] font-light text-lg flex flex-col gap-4">
              <p>
                We're a group of students, engineers, and designers operating at the intersection of business and technology.
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

        <h2 className="text-white text-5xl font-semibold mb-16">Client & Student Testimonials</h2>
      </div>
      <div className="mb-40">
        <InfiniteSlider />
      </div>
    </main>
  )
}

export default HomePage