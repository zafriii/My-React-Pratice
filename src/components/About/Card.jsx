import React from 'react'
import './card.css'

function Card(props) {
  return (
    <>
    
    <div className='card' >
        
    {props.icon}
    {props.text}

    </div>
    
    
    </>
  )
}

export default Card