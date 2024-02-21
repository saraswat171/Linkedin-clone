import { Avatar, Button, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import EmojiPicker from 'emoji-picker-react';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import './Comment.css'
import { commentUser } from '../../Redux/comment/commentAction';
import { useDispatch } from 'react-redux';
function Comment({ postId }) {
  const [showemoji, setShowemoji] = useState(false);
  const [commentbody, setCommentbody] = useState('')
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      postId, commentbody
    }
    try {
      dispatch(commentUser(data));

    }
    catch (err) {
      alert(err);
    }

    setCommentbody('')

  }

  return (
    <Stack flexDirection={'column'} mb={'16px'} component={'form'} onSubmit={handleSubmit}  >
      <Stack flexDirection={'row'} alignItems={"center"} width={'523px'} sx={{ pt: '4px', pb: '8px', pl: '16px', pr: '16px' }} >

        <Avatar aria-label="recipe" sx={{ height: '40px', width: '40px', mr: '4px' }} >
          <img alt=''></img>
        </Avatar>

        <TextField placeholder='Add a comment...' sx={{ width: '100%' }}
          type='text'

          required

          name='commentbody'

          value={commentbody}
          onChange={(e) => setCommentbody(e.target.value)}
          InputProps={{
            sx: { borderRadius: "30px", fontSize: '14px', height: '40px' },

            endAdornment: (

              <Stack flexDirection={'row'} gap={"16px"} alignItems={'center'} >

                <SentimentSatisfiedAltIcon onClick={() => setShowemoji(!showemoji)} style={{ color: '#00000099', height: '24px', width: '24px', cursor: 'pointer' }} />

                <InsertPhotoOutlinedIcon style={{ color: '#00000099', height: '24px', width: '24px', cursor: 'pointer' }} /></Stack>)
          }} >
        </TextField>


        {showemoji && <EmojiPicker
          pickerStyle={{ width: '100%' }}

        />}

      </Stack>
      {(commentbody.length !== 0 && <Button type="submit" color="primary" variant='contained' sx={{ height: '24px', width: "51px", ml: '60px', borderRadius: 28, p: 0, minWidth: '0', fontSize: 14, textTransform: 'none' }}>Post</Button>)}
    </Stack>


  )
}

export default Comment