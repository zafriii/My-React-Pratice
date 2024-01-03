import React , {useEffect} from 'react'
import HeroSection from '../components/Home/Herosection'
import Navbar from '../components/Home/Navbar'

function Home() {

  useEffect(() => {   
    document.title = `Home`  
  });

  return (
    <> 
    <Navbar/>
    <HeroSection/>
    
    </>
  )
}

export default Home 