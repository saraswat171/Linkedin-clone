
import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import idnIcon from '../../Assets/icons/Linkedin-signuo-logo.png'
import Button from '../../components/Button/Button'
import heroimage from '../../Assets/images/dxf91zhqd2z6b0bwg85ktm5s4.svg'

import Adornment from '../../components/Adornment/Adornment'
import { TextField, Box } from '@mui/material'

function Login() {
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
                        <Box className='hero-content-login'>
                            <Box className='text-field-login'>


                                <Box className='email-field'>
                                    <label className='label'>Email or phone number</label>
                                    <TextField type='email' error={false} InputProps={{ style: { padding: '9px' } }} size='small' />
                                </Box>





                                <Adornment label='Password ' height='55px' padding='9px' />


                            </Box>
                            <Box>
                                <Link className='forget-login'>Forgot Password?</Link>
                            </Box>
                            <Box className='textbutton-login'>


                                <Button name='Sign In' classname='btn' />
                            </Box>
                            <Box className='or-login'>
                                <Box className='line'></Box>
                                <p className='lineor'>or</p>
                                <Box className='line'></Box>

                            </Box>
                            <p className='textbuttonpara-login'>By clicking Agree & Join, you agree to the LinkedIn <span className='spantext'>User Agreement, Privacy Policy</span> , and <span className='spantext'>Cookie Policy</span>.</p>
                            <Box className='btnBoxv-login'> <Button name='Continue With Google' classname='btnn' /></Box>
                            <Box className='lastBox-login'>
                                <Box className='btnBoxv-login'> <Button name=' New to LinkedIn? Join now ' classname='btnn' /></Box>


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