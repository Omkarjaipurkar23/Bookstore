import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Freebook from '../components/Freebook'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <div className='overflow-x-hidden text-neutral-900 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute h-screen w-screen -z-10 bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
      </div>

      <div>
        <Navbar />
        <Banner />
        <Freebook /> {/* ✅ Cards are already inside Freebook */}
        <Footer />
      </div>
      
    </div>

    </>
  )
}

export default Home
