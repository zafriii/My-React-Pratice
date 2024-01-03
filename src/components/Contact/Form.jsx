import React from 'react'
import styles from './Contact.module.css'
import Button from '../Buttons/Button'
import {MdMessage} from 'react-icons/md'
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

function Form() {
  return (
    <>
     <div className={`${styles.container}`}>

    <div className={`${styles.form_container}`}>

    <div className={`${styles.contact_form}`}>

    <div className={styles.top_btn}>

    <Button  icon={<MdMessage fontSize="24px" />} text="VIA SUPPORT CHAT"/>
    <Button  icon={<FaPhoneAlt fontSize="20px" />} text="VIA CALL"/>
    </div>


    <div className={styles.down_btn}>

    <Button  icon={<HiMail fontSize="24px" />} text="VIA EMAIL FORM"/>
   
    </div>

    </div>

    <form>

        <div className={styles.form_control}>

        <label htmlFor='Name'>Name</label>
        <input type='text' name='name'/>

        <label htmlFor='Email'>Email</label>
        <input type='text' name='email'/>

        <label htmlFor='Text'>Text</label>
        <textarea name="text" rows="8" />

        </div>

        <div className={styles.submit_btn}>
        <Button text="SUBMIT"/></div>

    </form>
    </div>

    <div className={`${styles.contactImage}`}><img src="/images/redphone.jpg"></img></div>
    


    </div>

    </>
  )
}

export default Form