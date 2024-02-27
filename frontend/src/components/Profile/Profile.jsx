import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
function ProfileCard() {
  return (
    <Stack flexDirection={'column'} sx={{width:'225px',height:'max-content' ,backgroundColor:'#FFFFFF'}} >
        <Stack flexDirection={'column'} >
             <Box  > <img src='' alt='' style={{width:225 , height:56 ,borderRadius:10, borderBottomLeftRadius:0 , borderBottomRightRadius:0 ,background:'skyblue' }}></img></Box>
             <Box    sx={{ display:'flex' , ml:'78.5px' , mt:'-38px' , mb:'12px' }} > <img src='' alt='' style={{width:68 , height:68 ,background:'black', borderRadius:'50%' }}></img></Box>
        </Stack >
        <Stack flexDirection={'column'} sx={{m:0 ,pb:1.5, alignItems:'center' ,width:'225px'}}>
            <Typography  fontSize={'16px'}>Chetan Saraswat</Typography>
            <Typography mt={'4px'} fontSize={'12px'}>Software developer at Zenmonk</Typography>
       
        </Stack>
        <Box sx={{height:'1px' , color:'grey'}}></Box>
        <Stack flexDirection={'column'} sx={{ p:0 , pt:1.5 , pb:1.5 , alignItems:'center' ,width:'225px'}}>
            <Box display={'flex'} f><Typography  fontSize={'12px'}>Profile viewers</Typography> <Typography  fontSize={'12px'}>36</Typography></Box>
            <Typography fontSize={'12px'}>Software developer at Zenmonk</Typography>
       
        </Stack>

    </Stack>
  )
}

export default ProfileCard