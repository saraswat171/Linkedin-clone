import { Box, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function Analyst() {
  return (
    <Stack sx={{pt:'24px', pl:'24px',pr:'24px' , backgroundColor:'white' , borderRadius:'15px'}}>   
    
        <Box>
            <Typography fontSize={'20px'}>Analytics</Typography>
            <Typography fontSize={'14px'} display={'flex'} flexDirection={'row'} 
            gap={'4px'} alignItems={'center'}
             > <RemoveRedEyeIcon sx={{height:'16px' , width:'16px'}} /> Private to you</Typography>
        </Box>
        <Stack flexDirection={'row'} pt={'12px'} pb={'12px'} >
            <Box sx={{width:'180px' , display:'flex', flexDirection:'row' ,  gap:'8px',mr:'24px' }}>
                 <PeopleAltIcon sx={{height:'28px' , width:'24px'}} />
           <Box display={'flex'}  flexDirection={'column'}>
            <Typography fontSize={'16px'}>39 profile views</Typography>
            <Typography fontSize={'14px'}> Discovered who's viewed your profile.</Typography>
            </Box>   

            </Box>


            <Box sx={{width:'150px' , display:'flex', flexDirection:'row' ,  gap:'8px' }}>
                 <SearchIcon sx={{height:'28px' , width:'24px'}} />
           <Box display={'flex'}  flexDirection={'column'}>
            <Typography fontSize={'16px'}>35 search appearances</Typography>
            <Typography fontSize={'14px'}> Sea how often you appear in search results.</Typography>
            </Box>   

            </Box>
        </Stack>
        <Divider/>
        <Box  pt={'12px'} pb={'12px'} display={"flex"} justifyContent={'center'} >
        <Typography fontSize={'16px'} display={'flex'} flexDirection={'row'} 
            gap={'4px'} alignItems={'center'} textAlign={'center'}
             > Show all analytics <ArrowForwardIcon sx={{height:'16px' , width:'16px'}} /> </Typography>
        </Box>
        

    </Stack>
  )
}

export default Analyst