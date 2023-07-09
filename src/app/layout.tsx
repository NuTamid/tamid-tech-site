import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TAMID Tech Consulting',
  description: `We're a group of engineers, operating at the intersection of 
  business and technology. With a wealth of experience in software development, 
  research, and consulting, we are dedicated to helping our clients leverage 
  technology to achieve their goals.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
