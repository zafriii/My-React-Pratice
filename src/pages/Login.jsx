import React , {useEffect} from 'react'
import Loginform from '../components/Login/Loginform'


function Login() {

  useEffect(() => {    
    document.title = `Login`  
  });

  return (
    <>
 <Loginform/>
    </>
  )
}

export default Login