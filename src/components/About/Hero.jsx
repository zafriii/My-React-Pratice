import React from 'react'
import './hero.css'
import Card from '../About/Card'
import { FaBell } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Hero() {
  return (
    <>
    
    <div className="hero-image">
        <img src="images/1.jpg" alt="red-shoe" />
        <div className="discount">
        
        <div className="discount-text">
           <h1>Sale bell ! <FaBell /></h1>
            <h2>30% off on our popular product !</h2>
            <button>Shop Now</button>
            </div>
        </div>
    </div>

    <div className="card-comps">

            <Card icon={<FaTruck />} text="Free shipping on order over $99"/>
            <Card icon={<FaMoneyBillWave />} text="3 days money back guarantee"/>
            <Card icon={<CiStar />} text="5% discount on order over $199"/>

    </div>

   <div className="social-media">

        <h3>Follow us on <FaFacebookSquare /> <FaInstagram /> <FaTwitter /> </h3>
      
   </div>


    </>
  )
}

export default Hero