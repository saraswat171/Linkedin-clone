import { Stack, Typography } from '@mui/material'
import React from 'react'
import SuggestionCard from '../SuggestionCard/SuggestionCard'

function Suggestion() {
  return (
    <Stack flexDirection={'column'} sx={{width:'804px' , backgroundColor:'white', boxSizing:'border-box', pl:'16px',pt:'8px',pr:'8px',borderRadius:'8px'}}>
    <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{pb:'14px'}}>
        <Typography fontSize={'16px'} fontWeight={'400'} color={'#666666'}>Software Engineers you may know</Typography>
        <Typography fontSize={'16px'}  fontWeight={'550'} color={'#999999'}>See all</Typography>
    </Stack>
    <Stack flexWrap={'wrap'} display={'flex'} flexDirection={'row'}  gap={'13px'}>
        <SuggestionCard/>
        <SuggestionCard/>
        <SuggestionCard/>
        <SuggestionCard/>
        <SuggestionCard/>
        <SuggestionCard/>

    </Stack>

 </Stack>
  )
}

export default Suggestion