import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
function ProfileCard() {
  return (
    <Stack flexDirection={'column'} sx={{width:'225px'}} >
        <Stack flexDirection={'column'} >
             <Box  > <img src='' alt='' style={{width:225 , height:56 ,borderRadius:10, borderBottomLeftRadius:0 , borderBottomRightRadius:0 ,background:'blue' }}></img></Box>
             <Box    sx={{ display:'flex' , ml:'78.5px' , mt:'-38px' , mb:'12px' }} > <img src='' alt='' style={{width:68 , height:68 ,background:'black', borderRadius:'50%' }}></img></Box>
        </Stack >
        <Stack flexDirection={'column'} sx={{ml:12 , mr:12 , mb:16 , alignItems:'center'}}>
            <Typography fontSize={'16px'}>Chetan Saraswat</Typography>
       
        </Stack>

    </Stack>
  )
}

export default ProfileCard