import React from 'react';
import './Input.css'
import TextField from '@mui/material/TextField';
const Input = ({label,type, name, placeholder, value, onChange }) => {
    return (
       
            
              <div className='inputdiv'>
                      {/* <input className='inputfield'
                        type={type} 
                        name={name} 
                        id={name} 
                        placeholder={placeholder} 
                        value={value} 
                        onChange={onChange} 
                        required 
                    ></input> */}
                    <label className='label'>{label}</label>
                      <TextField type={type} error={false}  sx={{ height:'30px' }}   size='small' />
              </div>
            
              
    );
};

export default Input;