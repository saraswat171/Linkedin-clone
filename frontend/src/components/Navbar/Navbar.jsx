
import { AppBar,  InputAdornment,  TextField,  Toolbar } from '@mui/material'
import React from 'react'
import LinkedinIcon from '../../Assets/icons/icon.png'
import SearchIcon from '@mui/icons-material/Search';
import './Navbar.css'
function Navbar() {
  return (
 
<AppBar sx={{backgroundColor:'white', height:'52px' , justifyContent:'center', boxShadow:'none'}}>
<Toolbar sx={{margin:'auto'}}>

      <Toolbar sx={{alignItems:'center', gap:'10px'}}>
      <img src={LinkedinIcon} alt='' className='iconsimage'></img>
   
            
             
         
   <TextField  placeholder="Search…" size='small'   variant="standard" sx={{backgroundColor:'#EDF3F8', p:'5px',alignItems:"center"}}
     InputProps={{  disableUnderline: true, startAdornment: (
       <InputAdornment position="start">
         <SearchIcon style={{color:'black',height:'20px',padding:'5px', cursor:'pointer'}} />
       </InputAdornment>
     ),
   }} />
      </Toolbar>
             
              
             
            
         
       
       
          
</Toolbar>
</AppBar>

 
  )
}

export default Navbar
