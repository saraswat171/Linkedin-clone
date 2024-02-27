import React from 'react'
import Mynetworkcard from '../../components/Mynetwork/Mynetworkcard'
import RequestCard from '../../components/Requestcard/RequestCard'

import Suggestion from '../../components/Suggestions/Suggestion'
import { Stack } from '@mui/material'
import Navbar from '../../components/Navbar/Navbar'

function Mynetwork() {
    return (



        <Stack flexDirection={'column'} gap={'20px'} >
            <Navbar />
            <Stack flexDirection={'row'} gap={'20px'} margin={'auto'}>
                <Mynetworkcard />
                <Stack flexDirection={'column'} gap={'20px'}>
                    <RequestCard />
                    <Suggestion />
                </Stack>
            </Stack>


        </Stack>



    )
}

export default Mynetwork