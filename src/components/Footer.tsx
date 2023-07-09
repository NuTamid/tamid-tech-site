import React from 'react'
import Image from "next/image"
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <div className="flex items-center relative bottom-0 w-full z-50 mx-auto bg-black py-6 px-8 lg:px-48">
        <Image
          src="/footlogo.svg"
          alt="TAMID logo"
          width={36}
          height={36}
        />
        <div className="flex items-center justify-between w-full">
          <p className="ml-6 text-[#A3A3A3] font-light text-sm">© TAMID Group - TAMID at Northeastern. All Right Reserved.</p>
          <div className="flex gap-6">
            <Link href="https://www.linkedin.com/company/tamid-at-northeastern" target="_blank">
              <Image
                src="/linkedin.svg"
                alt="linkedin"
                width={24}
                height={24}
              />
            </Link>
            <Link href="https://www.instagram.com/tamidatnu/" target="_blank">
              <Image
                src="/insta.svg"
                alt="insta"
                width={24}
                height={24}
              />
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