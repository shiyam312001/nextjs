import Navbar from '@/component/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/component/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shiyam Lawrence',
  description: 'Made With Shiyam Lawrence',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
       
    </html>
  )
}
