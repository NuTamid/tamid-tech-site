import Image from "next/image"
import "../styles/Home.css"

const colors = ['#B4D5E3', '#00B3FF', '#11AEF1 45%', '#FC9639 50%', '#FC6161', '#FC397F'];

const gradientColors = colors.join(',');

const desktopGradient = {
  backgroundImage: `linear-gradient(to right, ${gradientColors})`,
  backgroundSize: '117.5% auto',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
};

const mobileGradient1 = {
  backgroundImage: `linear-gradient(to right, ${gradientColors})`,
  backgroundSize: '240% auto',
  backgroundClip: 'text',
  backgroundPosition: '-30px',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
};

const mobileGradient2 = {
  backgroundImage: `linear-gradient(to right, ${gradientColors})`,
  backgroundSize: '165% auto',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  backgroundPosition: '-200px',
  color: 'transparent',
};

const HomePage = () => {
  return (
    <main>
      <div className="flex justify-center">
        <div className="z-0 top-[8.5rem] md:-top-8 absolute opacity-[0.32] bg-gradient-radial from-orange-400 via-black via-70% to-black w-3/4 h-[300px] md:h-[1000px]" />
        <div className="animate-slide-up relative z-20 mt-24 lg:mt-56 lg:pl-6 text-white text-center font-semibold sm:text-xl md:text-2xl lg:text-3xl pb-4 lg:pb-3">The next era of tech <span className="font-semibold align-top lg:text-2xl">@</span> TAMID Northeastern</div>
      </div>
      <div className="flex justify-center pb-7 lg:pb-24">
        <h1 className="hidden md:flex animate-slide-up z-10 text-center lg:pr-5 text-[14vw] lg:text-[10.5vw] font-bold leading-none tracking-tight" style={desktopGradient}>TAMID Tech</h1>
        <div>
          <h1 className="md:hidden animate-slide-up z-10 text-center lg:pr-5 text-[24vw] lg:text-[10.5vw] font-bold leading-none tracking-tight" style={mobileGradient1}>TAMID</h1>
          <h1 className="md:hidden animate-slide-up z-10 text-center lg:pr-5 text-[24vw] lg:text-[10.5vw] font-bold leading-none tracking-tight" style={mobileGradient2}>Tech</h1>
        </div>
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