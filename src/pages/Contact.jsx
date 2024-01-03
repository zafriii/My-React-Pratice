import React , {useEffect} from 'react'
import Navbar from '../components/Home/Navbar'
import Header from '../components/Contact/Header'
import Form from '../components/Contact/Form'

function Contact() {

  useEffect(() => {   
    document.title = `Contact`  
  });

  return (
  <>
        <Navbar/>
        <Header/>
        <Form/>
       
  </>
  )
}

export default Contact
