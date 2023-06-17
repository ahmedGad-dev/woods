import React from 'react'
import Nav from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import Contact from '../components/Contact'
//import PageHero from '../components/PageHero'
import Services from '../components/Services'

const HomePage = () => {
  return(
     <main>
       <Hero/>
       <FeaturedProducts/>
       <Services/>
       <Contact/>
     </main>
  )
}

export default HomePage
