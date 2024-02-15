import React from 'react'
import './SignUp.css'
import idnIcon from '../../Assets/icons/Linkedin-signuo-logo.png'
import Input from '../../components/Inputs/Input'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'
function SignUp() {
  return (
    <div className='container'>
      <div className='content'>
        <div className='header'>
          <img className='icon-link' src={idnIcon} alt=''></img>
        </div>
        <div className='hero'>
          <div className='header_paragraph'>
            <p className='header-para'>Make the most of your professional life</p>
          </div>

          <div className='hero-content'>
            <div className='text-field'>

              <Input label='Email or phone number' type='email'
              />
              <Input label='Password (6+ characters)' type='password'
              />


            </div>

            <div className='textbutton'>
              <p className='textbuttonpara'>By clicking Agree & Join, you agree to the LinkedIn <span className='spantext'>User Agreement, Privacy Policy</span> , and <span className='spantext'>Cookie Policy</span>.</p>

              <Button name='Agree & Join'classname='btn'/>
            </div>
            <div className='or'>
            <div className='line'></div>
            <p className='lineor'>or</p>
            <div className='line'></div>
          </div>
         <div className='btndivv'> <Button name='Continue With Google' classname='btnn' /></div>
         <div className='lastdiv'>
        
          <p className='lastpara'>Already on LinkedIn? <Link className='loginto' >SignIn</Link> </p>

         </div>
          </div>
          <p className='lastparagraph'>Looking to create a page for a business? <Link className='loginto' >Get help</Link></p>

         
        </div>
      </div>


    </div>
  )
}

export default SignUp