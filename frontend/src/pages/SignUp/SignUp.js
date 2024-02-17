import React, {  useState } from 'react'
import './SignUp.css'
import idnIcon from '../../Assets/icons/Linkedin-signuo-logo.png'
import Input from '../../components/Inputs/Input'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'
import Adornment from '../../components/Adornment/Adornment'
import { useDispatch, useSelector } from 'react-redux'

import { authUser } from '../../Redux/auth/authAction'
import DialogBox from '../../components/Dialoge/Diagolue'
const SignUp =() =>{
  const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const dispatch =useDispatch()
   

 

 

    function handlePassword(event) {
        let new_pass = event.target.value;
        setPassword(new_pass);
        
    }
    const handleSubmit = (e) => {
      e.preventDefault();
    
  
  try{
      dispatch(authUser({  email, password }));
     
  }
    catch(err){
      alert(err);
    } 
      
      };
      const success= useSelector((state)=>state.auth.success)
     // const error= useSelector((state)=>state.auth.error)
      // useEffect(()=>{
      //   if(success===true){
      //       navigate('./Login')
      //   }
      // },[success ,navigate])
    

  return (
    <Box className='container'component={'form'} onSubmit={handleSubmit}>
      <Box className='content'>
        <Box className='header'>
          <img className='icon-link' src={idnIcon} alt=''></img>
        </Box>
        <Box className='hero'>
          <Box className='header_paragraph'>
            <p className='header-para'>Make the most of your professional life</p>
          </Box>

          <Box className='hero-content'>
            <Box className='text-field'>

              <Input label='Email or phone number' type='email' height='30px' name='email'
                        value={email}
                       
                        onChange={(e) => setEmail(e.target.value)}
              />
             
              
             <Adornment label='Password (6+ characters)' name='password'
                        value={password}   onChange={handlePassword}

                       
                         />

            </Box>

            <Box className='textbutton'>
              <p className='textbuttonpara'>By clicking Agree & Join, you agree to the LinkedIn <span className='spantext'>User Agreement, Privacy Policy</span> , and <span className='spantext'>Cookie Policy</span>.</p>

              <Button name='Agree & Join'classname='btn'/>
            </Box>
            <Box className='or'>
            <Box className='line'></Box>
            <p className='lineor'>or</p>
            <Box className='line'></Box>
          </Box>
         <Box className='btndivv'> <Button name='Continue With Google' classname='btnn' /></Box>
         <Box className='lastdiv'>
        
          <p className='lastpara'>Already on LinkedIn? <Link className='loginto' to='Login' >SignIn</Link> </p>

         </Box>
          </Box>
          <p className='lastparagraph'>Looking to create a page for a business? <Link className='loginto' >Get help</Link></p>

         
        </Box>
      </Box>
      <DialogBox open={success}  />

    </Box>
  )
}

export default SignUp