import React from 'react'
import styles from './Signup.module.css'
import Button from '../Buttons/Button'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'

function SignupForm() {
 
    
   const navigate = useNavigate();

const [type, setType]=useState('password');
const [icon, setIcon]=useState(eyeOff);


const handleToggle=()=>{    
  if(type==='password'){
    setIcon(eye);      
    setType('text');
  }
  else {
    setIcon(eyeOff);     
    setType('password');
  } 
  
}



return (

<> 

<h1 className={styles.header}>Sign Up</h1>

<main className={styles.main_container}>

   
 <div className={`${styles.container}`}>

<div className={`${styles.form_container}`}>

<div className={`${styles.contact_form}`}>
<form>

<div className={styles.form_control}>   

<label htmlFor='Name'>Name</label>
<input type='text' name='name'/>

<label htmlFor='Email'>Email</label>
<input type='text' name='email'/>

{/* <label htmlFor='Password'>Password</label>
<input type='password' name='password'/> */}

<label htmlFor='Password'>Password</label>
<div className={styles.pass_field}>
<input type={type}/>
 <span onClick={handleToggle}><Icon icon={icon} size={25}/></span>
</div>


<label htmlFor='Password'>Confirm Password</label>
<div className={styles.pass_field}>
<input type={type}/>
 <span onClick={handleToggle}><Icon icon={icon} size={25}/></span>
</div>

</div>

<div className={styles.signup_btn}>
<Button text="Register"/></div>


<div className={styles.go_home}>
<button onClick={()=>navigate("/home")} >Go to Home</button>
</div>

</form>
</div>
</div>
</div>
</main>
</>

    
  )
}

export default SignupForm