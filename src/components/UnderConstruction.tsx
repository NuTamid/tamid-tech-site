import Link from 'next/link'
import React from 'react'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'
import Image from 'next/image'

const UnderConstruction = () => {
  return (
    <div className="w-full">
        <div className="relative -z-50">
            <div className="absolute overflow-hidden h-[600px] w-full">
                {/* Mobile bg gradients */}
                <div className="md:hidden z-0 absolute -left-[8rem] -top-[2rem] w-[600px] h-[800px] bg-gradient-radial from-[#8201e5] via-transparent via-70% opacity-[0.25]" />
                <div className="md:hidden z-0 overflow-auto absolute left-[5rem] top-[20rem] w-[800px] h-[700px] bg-gradient-radial from-[#00aaf3] via-[#0071f366] via-50% to-75% opacity-[0.22]" />

                {/* Desktop bg gradients */}
                <div className="hidden md:flex z-0 absolute -left-[36rem] -top-[20rem] w-[1400px] h-[1150px] bg-gradient-radial from-[#8201e5] via-transparent via-70% opacity-[0.18]" />
                <div className="hidden md:flex z-0 overflow-auto absolute left-1/2 transform -translate-x-1/2 w-full h-[1500px] bg-gradient-radial from-[#00aaf3] from-8% via-[#0071f366] via-50% to-75% opacity-[0.34]" />
            </div>
        </div>
        <div className="text-white font-bold text-center mt-24 mb-16 text-3xl">Under Construction!</div>
        <div className="text-white font-bold text-center text-9xl">🏗️</div>
        <div className="font-mono text-white font-medium text-center mt-16 text-lg">Changes are coming very soon</div>
        <div className="w-full my-8 flex justify-center">
            <hr className="w-3/5 text-white font-light flex justify-center"></hr>
        </div>
          <div className="flex w-full justify-center gap-8 mt-6 mb-36">
            <Link href="https://www.linkedin.com/company/tamid-at-northeastern" target="_blank">
                <BsLinkedin color={"#FFFFFF"} size={38} />
            </Link>
            <Link href="https://www.instagram.com/tamidatnu/" target="_blank">
                  <BsInstagram color={"#FFFFFF"} size={38} />
            </Link>
        </div>
    </div>
  )
}

export default UnderConstruction