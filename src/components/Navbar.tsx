import Link from "next/link"

const Navbar = () => {
  return (
    <div>
      <ul>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/about'>About Us</Link></li>
        <li><Link href='/team'>Our Team</Link></li>
        <li><Link href='/clients'>Our Clients</Link></li>
        <li><Link href='/projects'>Our Projects</Link></li>
      </ul>
    </div>
  )
}

export default Navbar