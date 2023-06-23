import Link from "next/link"
import Image from "next/image"
import styles from "@/components/navbar.module.scss"

const Navbar = () => {
  return (
    <>
      <div className="mx-auto py-4 px-48 bg-black">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image
              src="/navlogo.svg"
              alt="TAMID logo"
              width={46}
              height={46}
            />
          </Link>
          <ul className="flex gap-10 text-white text-sm font-medium">
            <li>
              <Link href="/about" className="hover:text-[#00B3FF] duration-[0.2s]">
                <span className={`${styles.link} ${styles.linkUnderline} ${styles.linkUnderlineBlack} py-2`}>About Us</span>
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-[#00B3FF] duration-[0.2s]">
                <span className={`${styles.link} ${styles.linkUnderline} ${styles.linkUnderlineBlack} py-2`}>Projects</span>
              </Link>
            </li>
            <li>
              <Link href="/why-us" className="hover:text-[#00B3FF] duration-[0.2s]">
                <span className={`${styles.link} ${styles.linkUnderline} ${styles.linkUnderlineBlack} py-2`}>Why Us?</span>
              </Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-[#00B3FF] duration-[0.2s]">
                <span className={`${styles.link} ${styles.linkUnderline} ${styles.linkUnderlineBlack} py-2`}>Our Team</span>
              </Link>
            </li>
  
            <li>
              <Link href="/contact" className={styles.buttonArrow}>
                Contact
                <svg viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.arrowIcon}>
                  <g className={styles.arrowHead}>
                    <path d="M1 1C4.5 4 5 4.38484 5 4.5C5 4.61516 4.5 5 1 8" stroke="currentColor" stroke-width="1.5" />
                  </g>
                  <g className={styles.arrowBody}>
                    <path d="M3.5 4.5H0" stroke="currentColor" stroke-width="1.5" />
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
