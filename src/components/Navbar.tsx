"use client"
import Link from "next/link"
import Image from "next/image"
import "@/styles/Navbar.css"
import { useState, useEffect, useRef } from "react";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && 
        menuButtonRef.current && !menuButtonRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div className="relative z-50 mx-auto bg-black py-4 px-8 lg:px-48">
        <div className="flex items-center justify-between">
          <Link href="/" onClick={closeMenu}>
            <Image
              src="/navlogo.svg"
              alt="TAMID logo"
              width={46}
              height={46}
            />
          </Link>

          {/* Mobile view */}
          <div className="relative lg:hidden">
            <div className="flex items-center">
              <button
                ref={menuButtonRef}
                className="text-gray-200 focus:outline-none"
                onClick={toggleMenu}
              >
                <svg
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                  />
                </svg>
              </button>
            </div>

            {isOpen && (
              <div ref={menuRef} className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
                <Link
                  href="/about"
                  onClick={closeMenu}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  About Us
                </Link>
                <Link
                  href="/projects"
                  onClick={closeMenu}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Projects
                </Link>
                <Link
                  href="/why-us"
                  onClick={closeMenu}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Why Us?
                </Link>
                <Link
                  href="/team"
                  onClick={closeMenu}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Our Team
                </Link>
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Contact
                </Link>
              </div>
            )}
          </div>

          {/* Desktop view */}
          <ul className="hidden lg:flex gap-10 text-white text-sm font-medium">
            <li>
              <Link href="/about" className="hover:text-[#00B3FF] duration-[0.2s]">
                <span className="link linkUnderline linkUnderlineBlack py-2">About Us</span>
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-[#00B3FF] duration-[0.2s]">
                <span className="link linkUnderline linkUnderlineBlack py-2">Projects</span>
              </Link>
            </li>
            <li>
              <Link href="/why-us" className="hover:text-[#00B3FF] duration-[0.2s]">
                <span className="link linkUnderline linkUnderlineBlack py-2">Why Us?</span>
              </Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-[#00B3FF] duration-[0.2s]">
                <span className="link linkUnderline linkUnderlineBlack py-2">Our Team</span>
              </Link>
            </li>
  
            <li>
              <Link href="/contact" className={`buttonArrow`}>
                Contact
                <svg viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg" className={`arrowIcon`}>
                  <g className={`arrowHead`}>
                    <path d="M1 1C4.5 4 5 4.38484 5 4.5C5 4.61516 4.5 5 1 8" stroke="currentColor" strokeWidth="1.5" />
                  </g>
                  <g className={`arrowBody`}>
                    <path d="M3.5 4.5H0" stroke="currentColor" strokeWidth="1.5" />
                  </g>
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
