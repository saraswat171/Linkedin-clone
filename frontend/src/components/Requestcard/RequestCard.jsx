import React from 'react'
import { Avatar, Button, Divider, Stack, Typography } from '@mui/material'
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import { useSelector } from 'react-redux';
function RequestCard() {
  const requesteddata = useSelector((state)=>state.connection.requestdata)
  console.log('type', typeof(requesteddata))
  return (
    <Stack flexDirection={'column'} sx={{ width: '804px', backgroundColor: 'white', boxSizing: 'border-box', pl: '16px', pt: '8px', pr: '8px', borderRadius: '8px' }}>
      <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{ pb: '14px' }}>
        <Typography fontSize={'16px'} fontWeight={'400'} color={'#666666'}>Invitations</Typography>
        <Typography fontSize={'16px'} fontWeight={'550'} color={'#999999'}>Manage</Typography>
      </Stack>
   {/* // {requesteddata?.map((requests)=>( */}
   <Stack>
    <Divider />
      <Stack flexDirection={'row'} justifyContent={'space-between'}>
        <Stack flexDirection={'row'} sx={{ pt: '12.5px', pb: '12.5px' }} >
          <Avatar alt='' src='' sx={{ height: '71.99px', width: '71.99px', mr: '8px' }} />

          <Stack flexDirection={'column'} >
            <Typography sx={{ fontSize: '16px', color: '#333333', display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '5px', fontWeight: '600' }}>Chetan Saraswat <GppGoodOutlinedIcon /> </Typography>
            <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '400' }} >Web Developer I MERN-Stack Developer I Ex-GDSC CUET Web Team</Typography>

          </Stack>
        </Stack>
        <Stack flexDirection={'row'} alignItems={'center'} pr={'10px'} >
          <Button sx={{ textTransform: 'none', fontWeight: '500', fontSize: '16px', color: '#666666' }}>Ignore</Button>
          <Button variant='outlined' sx={{ textTransform: 'none', fontWeight: '500', fontSize: '16px', borderRadius: '30px', p: '1' }}>Accept</Button>
        </Stack>

      </Stack>
   </Stack>
      {/* ))} */}
      

   

    </Stack>
  )
}

export default RequestCard