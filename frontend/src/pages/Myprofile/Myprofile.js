import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Myprofileview from '../../components/Myprofileview/Myprofileview'
import { Stack } from '@mui/material'

function Myprofile() {
  return (
   
    <Stack flexDirection={'column'} gap={'20px'} >
    <Navbar/>
   <Stack margin={'auto'} >
   <Myprofileview/>
   </Stack>
   </Stack>

  )
}

export default Myprofile