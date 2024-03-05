import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Avatar, Button, Divider, Typography, Stack } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { fetchRoomUser, postRoomUser } from '../../Redux/room/roomAction';
import { useDispatch } from 'react-redux';

function ConnectedUsers() {
    const dispatch = useDispatch()
    const location = useLocation();
    const navigate = useNavigate();
    const { state } = location;
    const connectedData = state && state.acptedData;
    console.log('connectedData: ', connectedData);
    const handleRoomClick=async(receiverId)=>{
        

       const res = await dispatch(postRoomUser({receiverId}))
       if(res){
        navigate('/message')
       }
    }
 
    return (
        <Stack flexDirection={'column'} gap={'20px'} >
            <Navbar />

            <Stack margin={'auto'} flexDirection={'column'} sx={{ width: '804px', backgroundColor: 'white', boxSizing: 'border-box', pl: '20px', pt: '12px', pr: '20px', borderRadius: '8px' }}>
                <Stack flexDirection={'row'} sx={{ pb: '14px' }}>

                    <Typography fontSize={'16px'} fontWeight={'400'} color={'#999999'}>{connectedData?.length} Connections</Typography>
                </Stack>
                {connectedData?.map((connect)=>(

                <Stack  key={connect?._id} id={connect?._id} >
                  
                    <Stack flexDirection={'row'} justifyContent={'space-between'}>
                        <Stack flexDirection={'row'} sx={{ pt: '12.5px', pb: '12.5px' }} >
                            <Avatar alt='' src='' sx={{ height: '71.99px', width: '71.99px', mr: '8px' }} />

                            <Stack flexDirection={'column'} >
                                <Typography sx={{ fontSize: '16px', color: '#333333', display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '5px', fontWeight: '600' }}>{connect?.name}   </Typography>
                                <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '400' }} >Web Developer I MERN-Stack Developer I Ex-GDSC CUET Web Team</Typography>

                            </Stack>
                        </Stack>
                        <Stack flexDirection={'row'} alignItems={'center'} pr={'10px'} >
                            <Button onClick={()=>handleRoomClick(connect?._id)} variant='outlined' sx={{ textTransform: 'none', fontWeight: '500', fontSize: '16px', borderRadius: '30px', p: '1' }}>Message</Button>
                            <Button sx={{ textTransform: 'none', fontWeight: '500', fontSize: '16px', color: '#666666' }}> <MoreHorizIcon/></Button>
                        </Stack>

                    </Stack>
                </Stack>
                ))}

            </Stack>
        </Stack>
    )
}

export default ConnectedUsers