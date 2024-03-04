import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';

function About() {
  return (
   <Stack  sx={{pt:'24px', pl:'24px',pr:'24px' ,pb:'12px', backgroundColor:'white' , borderRadius:'15px'}}>
    <Box display={"flex"} flexDirection={'row'} pb={'12px'} justifyContent={'space-between'} alignItems={'center'} >
        <Typography fontSize={'20px'} >About</Typography>
        <ModeOutlinedIcon sx={{height:'24px', width:'24px'}}/>
    </Box>
    <Typography fontSize={'14px'} pb={'12px'}>I am a final year undergraduate Electronics Engineering Student at Chandigarh College of engineering and technology (degree wing), Chandigarh (India).I am skilled and deeply interested in Competitive Programming and love solving tricky problems 
    in the most optimal way possible.Apart from it I am Interested in learning Web Development.
     I also have a stronghold on fundamental of languages like C++ and Java.I am looking for 
     new projects and internship opportunities to explore my skills.
</Typography>
<Stack pt={'12px'} pb={'12px'} border={'1px solid grey' } borderRadius={'10px'} >
<Box sx={{ display:'flex', flexDirection:'row' ,  gap:'8px' , p:'12px'  }}>
                 <DiamondOutlinedIcon sx={{height:'28px' , width:'24px'}} />
           <Box display={'flex'}  flexDirection={'column'}>
            <Typography fontSize={'16px'}>Top skills</Typography>
            <Typography fontSize={'14px'}> Time Management • Team Leadership • Problem Solving • Decision-Making • Critical Thinking</Typography>
            </Box>   

            </Box>
</Stack>
   </Stack>
  )
}

export default About