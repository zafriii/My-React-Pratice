import React , {useEffect} from 'react'
import SignupForm from '../components/Signup/SignupForm'

function Signup() {

  useEffect(() => {   
    document.title = `Sign Up`  
  });

  return (
    <>
   
    <SignupForm/>
    
    </>
  )
}

export default Signup