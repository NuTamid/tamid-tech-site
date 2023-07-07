import Image from "next/image"
import "../styles/Home.css"

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

const HomePage = () => {
  return (
    <main>
      <div className="flex justify-center">
        <div className="z-0 top-[8.5rem] lg:-top-8 absolute opacity-[0.32] bg-gradient-radial from-orange-400 via-black via-70% to-black w-3/4 h-[300px] lg:h-[1000px]" />
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
    </main>
  )
}

export default HomePage