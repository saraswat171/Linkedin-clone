import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'
import CircleIcon from '@mui/icons-material/Circle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
function NotificationCard() {
    return (
        <Stack flexDirection={'row'} gap={'8px'} alignItems={'center'}>
            <CircleIcon sx={{ height: '10px', width: '10px', color: '#0B66C2' }} />
            <Avatar sx={{ mr: '4px', height: '48px', width: '48px' }} aria-label="recipe">
                R
            </Avatar>
            <Stack flexDirection={'row'} width={'100%'}  justifyContent={'space-between'} >

                <Typography>You have been notified for this post</Typography>
                <Stack flexDirection={'column'} gap={'8px'}  >
                    <Typography sx={{ fontSize: '12px' }}>22m</Typography>
                    <MoreHorizIcon />

                </Stack>
            </Stack>
        </Stack>
    )
}

export default NotificationCard