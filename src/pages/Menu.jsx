import React , {useEffect} from 'react'
import Navbar from '../components/Home/Navbar'
import Product from '../components/Menu/Product';


function Menu() {

  useEffect(() => {   
    document.title = `Menu`  
  });

  return (
    <>
    
    <Navbar/>
    <Product/>
    
    
    </>
  )
}

export default Menu