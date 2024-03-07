import { Button, Stack } from '@mui/material'
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import NotificationCard from '../../components/NotificationCard/NotificationCard'

function Notifications() {
    return (
        <Stack flexDirection={'column'} gap={'20px'} >
            <Navbar />
            <Stack flexDirection={'row'} gap={'20px'} margin={'auto'}>
                <Stack flexDirection={'column'} sx={{ width: '555px', boxSizing: 'border-box', pl: '16px', pt: '8px', pr: '8px', borderRadius: '8px' ,gap:'20px'}}>
                    <Stack flexDirection={'row'} gap={'8px'} alignItems={'center'} sx={{ p: '14px', backgroundColor: 'white' , borderRadius:'10px' }}>
                        <Button sx={{ textTransform: 'none', color: 'white', backgroundColor: '#005D11', borderRadius: '20px', p: '0', fontSize: '16px', height: '32px', ":hover": { backgroundColor: '#014C33', color: 'white' } }}  >All</Button>
                        <Button variant='outlined'
                            sx={{
                                textTransform: 'none', fontWeight: '500', fontSize: '16px', height: '32px', color: '#3B3B3B',
                                borderRadius: '80px', display: 'flex', p: '8px', ":hover": { backgroundColor: '#EBEBEB', outline: { border: '2px solid #3B3B3B' },p:'7px' },
                                outline: { border: '1px solid #3B3B3B' }
                            }}>
                            My posts </Button>
                        <Button variant='outlined'
                            sx={{
                                textTransform: 'none', fontWeight: '500', fontSize: '16px', height: '32px', color: '#3B3B3B',
                                borderRadius: '80px', display: 'flex', p: '8px', ":hover": { backgroundColor: '#EBEBEB', outline: { border: '2px solid #3B3B3B' } ,p:'7px'},
                                outline: { border: '1px solid #3B3B3B' }
                            }}>
                            Mentions </Button>
                    </Stack>
                    <Stack flexDirection={'column'} gap={'10px'} sx={{backgroundColor:'#C7DEF9' , p:'10px' ,borderRadius:'10px' }}>
                        <NotificationCard/>
                        <NotificationCard/>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Notifications