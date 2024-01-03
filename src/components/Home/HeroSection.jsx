import React from 'react'
import {useNavigate} from 'react-router-dom'
import styles from './Hero.module.css'

 function HeroSection() {

  const navigate = useNavigate();

  return (
    <>
    
    <main className={`${styles.hero}`}>

        <div className={`${styles.hero_content}`}>

        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

        

        <div className={`${styles.hero_button}`}>
            {/* <button>Shop Now</button> */}
            <button onClick={()=>navigate("/menu")}>Catagory</button>
        </div>

        <h4>Also available on</h4>

        <div className={`${styles.brand_icons}`}>
        <img src="/images/amazon.png" alt="amazon-logo" />
        <img src="/images/flipkart.png" alt="flipkart-logo" /> 
        </div>


        </div>

        <div className="hero_image">
        <img src="/images/hero-image.png" alt="hero-image" />
        </div>

    </main>
    
    </>
  )
}
export default  HeroSection
