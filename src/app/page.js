import Image from 'next/image'
import Navbar from './components/navbar'
import HeroSection from './components/hero'
import AboutSection from './components/about'

export default function Home() {
  return (
    <>
    <Navbar />

    <div>
      <HeroSection/>
      <AboutSection/>
    </div>
    </>

  )
}
