import { Avatar, Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';

function Myprofileview() {
  return (
   <Stack sx={{width:'804px' , mb:'24px'}}  >
    <Box sx={{backgroundColor:'black' , width:'100%' ,height:'200px'}} >
        <img src='' alt='' ></img>
    </Box>
    <Box sx={{ml:'24px',mr:'24px' , display:'flex' ,flexDirection:'row' ,justifyContent:'space-between' }} >
    <Avatar alt='' src='' sx={{height:"150px" , width:'150px', mt:'-90px' }} />
    <Box sx={{height:'24px' , width:'24px' , mt:'10px'}} ><ModeOutlinedIcon/></Box>
    </Box>
    <Stack ml={'24px'} mr={'24px'} mt={'8px'} display={'flex'} flexDirection={"row"} justifyContent={"space-between"} >
        <Box>
            <Typography fontSize={'24px'} >Chetan Saraswat</Typography>
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
    <Button variant='outlined'
     sx={{textTransform:'none',fontWeight:'500', fontSize:'16px' , width:'92px',height:'32px',
     borderRadius:'80px',display:'flex',p:'8px', color:'white' , backgroundColor:'#0A66C2',
     mr:'8px', ":hover":{backgroundColor:'#004182' , color:'white'}
     }}>
       
       Open to  </Button>
       <Button variant='outlined'
     sx={{textTransform:'none',fontWeight:'500', fontSize:'16px' ,height:'32px',
     borderRadius:'80px',p:'0',display:'flex',p:'8px',mr:'8px' , ":hover" : {backgroundColor:'#E6F2FE'}
     }}>
      Add  profile section </Button>

      <Button variant='outlined' 
     sx={{textTransform:'none',fontWeight:'500', fontSize:'16px' ,height:'32px',borderBlockColor:'#3B3B3B',
     borderRadius:'80px',p:'0',display:'flex',p:'8px' , ":hover" : {backgroundColor:''}
     }}>
      More </Button>

        
    </Stack>
   </Stack>
  )
}

export default Myprofileview