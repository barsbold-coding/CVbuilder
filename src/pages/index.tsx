import Image from 'next/image'
import { Inter } from 'next/font/google'
import {Heading} from '@/components/typography'
import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Navbar />
    </div>
  )
}
