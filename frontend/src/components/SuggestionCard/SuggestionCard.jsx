import { Avatar, Box, Button, Paper, Stack, Typography } from '@mui/material'
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import React from 'react'
import './SuggestionCard.css'
import { useDispatch } from 'react-redux';
import { connectionUser} from '../../Redux/connection/connectionAction';
function SuggestionCard({name , id , image}) {
  const dispatch = useDispatch()
  const handleConnectClick=( )=>{
      dispatch(connectionUser(id));
      
    } 
    
    
  return (
<Paper key={id} sx={{width:'184px',height:'max-content' ,backgroundColor:'#FFFFFF',borderRadius:"10px","&:hover":{boxShadow:6}  }} className='papper'  elevation={1}>
        <Stack  flexDirection={'column'} sx={{width:'184px',height:'max-content', cursor:'pointer' ,backgroundColor:'#FFFFFF',borderRadius:"10px"}} >
    <Stack flexDirection={'column'} alignItems={'center'} >
         <Box  > <img src='' alt='' style={{width:'184px' , height:'62px' ,borderRadius:10, borderBottomLeftRadius:0 , borderBottomRightRadius:0 ,background:'skyblue' }}></img></Box>
       
         <Avatar alt='' src='' sx={{height:'104px' , width:'104px', mt:'-52px', }}/>
    </Stack >
    <Stack flexDirection={'column'} sx={{m:0 ,pb:1.5,pl:'12px', pr:'12px',justifyContent:'center', alignItems:'center' }}>
        <Typography  fontSize={'16px'} >{name}</Typography>
        <Typography  fontSize={'14px'} textAlign={'center'} color={'#999999'}>Software developer at Zenmonk</Typography>

        <Typography mt={'12px'} fontSize={'12px'} color={'#999999'} textAlign={'center'} >Based on your profile</Typography>
        <Button variant='outlined' onClick={handleConnectClick} sx={{textTransform:'none',fontWeight:'550', fontSize:'16px' ,borderRadius:'30px',p:'0',display:'flex', gap:'5px' , mt:'12px', width:'100%'}}> <PersonAddAltRoundedIcon/>
         Connect</Button>

   
    </Stack>
  

</Stack>
</Paper>
  )
}

export default SuggestionCard