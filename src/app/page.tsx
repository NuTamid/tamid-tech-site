import Link from "next/link"

const HomePage = () => {
  return (
    <main>
      <h1>Welcome to the Home page!</h1>
      <ul>
        <li><Link href='/about'>About</Link></li>
      </ul>
    </main>
  )
}

export default HomePage