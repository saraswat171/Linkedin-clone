import { Avatar, Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { ReactComponent as Messageicon } from "../../Assets/icons/download.svg";
import AddIcon from '@mui/icons-material/Add';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import Analyst from './Analyst';
import About from './About';
import backgroundimg from '../../Assets/images/painting-mountain-lake-with-mountain-background_188544-9126.avif'
import { useLocation } from 'react-router-dom';

function Myprofileview() {

  const userinfo = JSON.parse(localStorage.getItem('user')) // data of login user
  const location = useLocation(); // this and below line has the data of users 
  const {state} = location;
  const user = state && state.user;
  console.log("useringo" , user)
 
  return (
  <Stack flexDirection={'column'} gap={'12px'} sx={{width:'804px' }} >
   <Stack sx={{width:'804px' , pb:'24px' , backgroundColor:'white'}}  >
    <Box sx={{
   }} >
        <img src={backgroundimg} style={{ width:'100%' ,height:'200px',  borderTopLeftRadius:'10px' , borderTopRightRadius:'10px'}} alt='' ></img>
    </Box>
    <Box sx={{ml:'24px',mr:'24px' , display:'flex' ,flexDirection:'row' ,justifyContent:'space-between' }} >
    <Avatar alt='' src='' sx={{height:"150px" , width:'150px', mt:'-90px' }} />
    <Box sx={{height:'24px' , width:'24px' , mt:'10px'}} ><ModeOutlinedIcon/></Box>
    </Box>
    <Stack ml={'24px'} mr={'24px'} mt={'8px'} display={'flex'} flexDirection={"row"} justifyContent={"space-between"} >
        <Box>
            <Typography fontSize={'24px'} >{user?.name} Saraswat</Typography>
            <Typography fontSize={'16px'} >Software Developer </Typography>
            <Typography fontSize={'14px'} mt={'8px'} >Sahibjada ajit nagar road , Mohali </Typography>
            <Typography fontSize={'14px'} color={'#0A66C2'} >Contact info </Typography>
            <Typography fontSize={'14px'} mt={'8px'} color={'#0A66C2'} >341 connections </Typography>
            
        </Box>
        <Box sx={{mr:'24px' , width:'232px'}}>
            <Typography fontSize={'14px'} mb={'8px'} >Zenmonk</Typography>
            <Typography fontSize={'14px'}fontWeight={'500'} mt={'8px'} >Chandigarh college of engineering , Degree wing</Typography>
        </Box>

    </Stack>
    <Stack ml={'24px'} mr={'24px'} pt={'12px'} flexDirection={'row'}>
{(userinfo._id === user._id) ?     <Button variant='outlined'
     sx={{textTransform:'none',fontWeight:'500', fontSize:'16px' , width:'92px',height:'32px',
     borderRadius:'80px',display:'flex',p:'8px', color:'white' , backgroundColor:'#0A66C2',
     mr:'8px', ":hover":{backgroundColor:'#004182' , color:'white'}
     }}>
       
       Open to  </Button> : <Button variant='outlined'
     sx={{textTransform:'none',fontWeight:'500', fontSize:'16px' , width:'110px',height:'32px',
     borderRadius:'80px',display:'flex',p:'8px', color:'white' , backgroundColor:'#0A66C2',
     mr:'8px', ":hover":{backgroundColor:'#004182' , color:'white'}
     }}>
   <Messageicon />
      Message  </Button> }
   {(userinfo._id === user._id) ? 
        <Button variant='outlined' 
        sx={{textTransform:'none',fontWeight:'500', fontSize:'16px' ,height:'32px',
        borderRadius:'80px',display:'flex',p:'8px',mr:'8px' , ":hover" : {backgroundColor:'#E6F2FE',  outline:{border:'2px solid '}},
        outline:{border:'1px solid '}
        }}>
         Add  profile section </Button> :     <Button variant='outlined' 
     sx={{textTransform:'none',fontWeight:'500', fontSize:'16px' ,height:'32px',
     borderRadius:'80px',display:'flex',p:'8px',mr:'8px' , ":hover" : {backgroundColor:'#E6F2FE',  outline:{border:'2px solid '}},
     outline:{border:'1px solid '}
     }}><AddIcon/>
     Follow </Button>
   }

      <Button variant='outlined' 
     sx={{textTransform:'none',fontWeight:'500', fontSize:'16px' ,height:'32px',color:'#3B3B3B',
     borderRadius:'80px',display:'flex',p:'8px' , ":hover" : {backgroundColor:'#EBEBEB',outline:{border:'2px solid #3B3B3B'}},
     outline:{border:'1px solid #3B3B3B'}
     }}>
      More </Button>

        
    </Stack>
   </Stack>
   <Analyst/>
   <About/>
   </Stack>
  )
}

export default Myprofileview