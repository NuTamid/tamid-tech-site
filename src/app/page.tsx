import Image from "next/image"
import "../styles/Home.css"

const colors = ['#B4D5E3', '#00B3FF', '#11AEF1 45%', '#FC9639 50%', '#FC6161', '#FC397F'];

const gradientColors = colors.join(',');

const style = {
  backgroundImage: `linear-gradient(to right, ${gradientColors})`,
  backgroundSize: '117% auto',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
};

const HomePage = () => {
  return (
    <main>

      <div className="animate-slide-up relative z-20 mt-24 lg:mt-56 lg:pl-6 text-white text-center font-semibold sm:text-xl md:text-2xl lg:text-3xl pb-2 lg:pb-3">The next era of tech <span className="font-semibold align-top lg:text-2xl">@</span> TAMID Northeastern</div>
      <div className="flex justify-center pb-7 lg:pb-16">
        <div className="z-0 absolute w-[200px] h-[87px] lg:w-[405px] lg:h-[294px] bg-orange-400 rounded-full blur-[75px] lg:blur-[200px]" />
        <h1 className="animate-slide-up z-10 text-center lg:pr-5 text-[14vw] lg:text-[10.5vw] font-bold leading-none tracking-tight" style={style}>TAMID Tech</h1>
      </div>
      <Image
        src="/heroimage.svg"
        alt="hero image"
        width="2000"
        height="2000"
        className="animate-slide-up relative z-20"
      />
    </main>
  )
}

export default HomePage