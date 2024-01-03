import React , {useEffect} from 'react'
import Navbar from '../components/Home/Navbar'
import Hero from '../components/About/Hero'
import Card from '../components/About/Card'


function About() {

  useEffect(() => {   
    document.title = `About`  
  });
  

  return (
    <>
    <Navbar/>
    <Hero/>
   
    
    </>
  )
}

export default About