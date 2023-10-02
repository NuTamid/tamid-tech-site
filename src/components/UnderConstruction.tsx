import Link from 'next/link'
import React from 'react'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'

const UnderConstruction = () => {
  return (
    <div className="h-full w-full">
        <div className="w-full">
            <div className="-z-50 top-0 overflow-hidden absolute w-full h-[800px]">
                  {/* Mobile bg gradients */}
                  <div className="md:hidden absolute -left-[8rem] -top-[2rem] w-[600px] h-[800px] bg-gradient-radial from-[#8201e5] via-transparent via-70% opacity-[0.25]" />
                  <div className="md:hidden overflow-auto absolute left-[5rem] top-[20rem] w-[800px] h-[700px] bg-gradient-radial from-[#00aaf3] via-[#0071f366] via-50% to-75% opacity-[0.22]" />

                  {/* Desktop bg gradients */}
                  <div className="hidden md:flex absolute -left-[36rem] -top-[20rem] w-[1400px] h-[800px] bg-gradient-radial from-[#8201e5] via-transparent via-70% opacity-[0.18]" />
                  <div className="hidden md:flex overflow-auto absolute left-1/2 transform -translate-x-1/2 w-full h-[1500px] bg-gradient-radial from-[#00aaf3] from-8% via-[#0071f366] via-50% to-75% opacity-[0.34]" />
            </div>
        </div>
        <div className="text-white font-bold text-center mt-24 mb-16 text-3xl">PAGE UNDER CONSTRUCTION</div>
        <div className="text-white font-bold text-center text-9xl">🏗️</div>
        <div className="font-mono text-white font-medium text-center mt-16 text-lg">Changes are coming very soon! In the meantime, check out our socials...</div>
        <div className="w-full my-8 flex justify-center">
            <hr className="w-3/5 md:w-2/5 text-white font-light flex justify-center"></hr>
        </div>
        <div className="flex w-full justify-center gap-12 mt-6 mb-36">
            <Link href="https://www.linkedin.com/company/tamid-at-northeastern" target="_blank">
                <BsLinkedin className="hover:scale-125 duration-200" color={"#FFFFFF"} size={38} />
            </Link>
            <Link href="https://www.instagram.com/tamidatnu/" target="_blank">
                  <BsInstagram className="hover:scale-125 duration-200" color={"#FFFFFF"} size={38} />
            </Link>
        </div>
    </div>
  )
}

export default UnderConstruction