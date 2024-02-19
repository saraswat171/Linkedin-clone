
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import idnIcon from '../../Assets/icons/Linkedin-signuo-logo.png'
import Button from '../../components/Button/Button'
import heroimage from '../../Assets/images/dxf91zhqd2z6b0bwg85ktm5s4.svg'

import Adornment from '../../components/Adornment/Adornment'
import { TextField, Box } from '@mui/material'
import { loginUser } from '../../Redux/auth/authAction'
import { useDispatch, useSelector } from 'react-redux'

const Login=()=> {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    function handlePassword(event) {
      let new_pass = event.target.value;
      setPassword(new_pass);
  }
    const logged = useSelector(state => state.auth.logged);
  
    const navigate = useNavigate();
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
    try{
      dispatch(loginUser({ email, password }));
  
    }
    catch(err){
      alert(err);
    }
    
      
    };
   
    
    useEffect(()=>{
      if(logged){
        navigate('/Home')
      }
    },[logged ,navigate])

    return (
        <Box className='login-container'>
            <Box className='Content'>
                <Box className='header'>
                    <img className='icon-link' src={idnIcon} alt=''></img>
                    <Box className='header-btn'>
                        <Link className='join'>Join now</Link>
                        <Button name='Sign in' classname='btnp'></Button>
                    </Box>
                </Box>
                <Box className='hero-login'>
                    <Box className='login-form'>
                        <Box className='textwelcome'>Welcome to your <br/> professional community
                        </Box>
                        <Box className='hero-content-login' component={'form'} onSubmit={handleSubmit}>
                            <Box className='text-field-login' >


                                <Box className='email-field'>
                                    <label className='label'>Email or phone number</label>
                                    <TextField 
                                    type='email' 
                                    error={false} 
                                    InputProps={{ style: { padding: '9px' } }} size='small'                                  
                                    name='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Box>





                                <Adornment 
                                label='Password' 
                                height='55px' 
                                padding='9px' 
                                name='password'
                                value={password}   
                                onChange={handlePassword}
                                />


                            </Box>
                            <Box>
                                <Link className='forget-login'>Forgot Password?</Link>
                            </Box>
                            <Box className='textbutton-login'>


                                <Button name='Sign In' type='submit' classname='btn' />
                            </Box>
                            <Box className='or-login'>
                                <Box className='line'></Box>
                                <p className='lineor'>or</p>
                                <Box className='line'></Box>

                            </Box>
                            <p className='textbuttonpara-login'>By clicking Agree & Join, you agree to the LinkedIn <span className='spantext'>User Agreement, Privacy Policy</span> , and <span className='spantext'>Cookie Policy</span>.</p>
                            <Box className='btnBoxv-login'> <Button name='Continue With Google'  type="button" classname='btnn' /></Box>
                            <Box className='lastBox-login'>
                                <Box className='btnBoxv-login'> <Button name=' New to LinkedIn? Join now '  type="button" classname='btnn' /></Box>


                            </Box>
                        </Box>
                    </Box>

                    <Box className='imagepage'>
                        <img className='imagepage' src={heroimage} alt=''></img>
                    </Box>

                </Box>

            </Box>

        </Box>
    )
}

export default Login