import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import { BsLinkedin, BsInstagram } from 'react-icons/bs'


const Footer = () => {
  return (
    <>
      <div className="gap-5 md:gap-0 flex flex-col md:flex-row md:items-center bottom-0 w-full z-50 mx-auto bg-black py-6 px-8 lg:px-48">
        <div className="flex md:hidden justify-between items-center">
          <Image
            src="/footlogo.svg"
            alt="TAMID logo"
            width={36}
            height={36}
          />
          <div className="flex gap-6">
            <Link href="https://www.linkedin.com/company/tamid-at-northeastern" target="_blank">
              <BsLinkedin color={"#A3A3A3"} size={23} />
            </Link>
            <Link href="https://www.instagram.com/tamidatnu/" target="_blank">
              <BsInstagram color={"#A3A3A3"} size={23} />
            </Link>
            <Link href="https://nutamid.org/" target="_blank">
              <Image
                src="/tamidsocial.svg"
                alt="tamid site icon"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
        <div className="gap-5 md:gap-0 flex flex-col md:flex-row md:items-center justify-between w-full">
          <p className="hidden md:flex ml-6 text-[#A3A3A3] font-light text-sm">© TAMID Group - TAMID at Northeastern. All Right Reserved.</p>
          <p className="md:hidden text-[#A3A3A3] text-center font-light text-sm">© TAMID Group - TAMID at Northeastern</p>
          <div className="hidden md:flex gap-6">
            <Link href="https://www.linkedin.com/company/tamid-at-northeastern" target="_blank">
              <BsLinkedin color={"#A3A3A3"} size={23} />
            </Link>
            <Link href="https://www.instagram.com/tamidatnu/" target="_blank">
              <BsInstagram color={"#A3A3A3"} size={23} />
            </Link>
            <Link href="https://nutamid.org/" target="_blank">
              <Image
                src="/tamidsocial.svg"
                alt="tamid site icon"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>         
      </div>
    </>
  )
}

export default Footer