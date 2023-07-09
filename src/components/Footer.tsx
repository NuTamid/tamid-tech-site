import React from 'react'
import Image from "next/image"

const Footer = () => {
  return (
    <>
      <div className="relative bottom-0 w-full z-50 mx-auto bg-black py-4 px-8 lg:px-48">
        <Image
          src="/footlogo.svg"
          alt="TAMID logo"
          width={46}
          height={46}
        />
      </div>
    </>
  )
}

export default Footer