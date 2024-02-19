import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import './PostCreate.css'
import EmojiPicker from 'emoji-picker-react';
import Hover from '../Hover';

function PostCreate() {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [postbody, setPostbody] = useState('')
    const [posttitle, setPosttitle] = useState('')
    const [showemoji, setShowemoji] = useState(false);
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Box className="post-container">
                <Box className="post-container-a">

                    <img className="image" alt='' ></img>
                    <Box className="post-head" onClick={handleClickOpen} >Start a post</Box>
                </Box>
                <Box className="post-bottom">
                    <Box className="list-item">
                        <i class="fa-solid fa-image"></i>
                        <h1 className='post-heading'>Media</h1>
                    </Box>
                    <Box className="list-item">
                        <i class="fa-solid fa-briefcase"></i>
                        <h1 className='post-heading'>Job</h1>
                    </Box>
                    <Box className="list-item">
                        <i class="fa-regular fa-newspaper"></i>

                        <h1 className='post-heading'>Write a article</h1>
                    </Box>
                </Box>
            </Box>
            <Dialog
                onClose={handleClose}
                fullScreen={fullScreen}
                fullWidth
                open={open}
            >
                <DialogTitle  >
                    <Box className='title-box' >
                        <img className='post-title-image' alt=''></img>
                        <Box className='post-title-head'>
                            <Typography sx={{ fontSize: '20px' }}> name of user


                                <i class="fa-solid fa-caret-down"></i>
                            </Typography>
                            <Typography sx={{ fontSize: '14px' }}>Post To Anyone</Typography>


                        </Box>
                    </Box>
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <i class="fa-solid fa-xmark"></i>

                </IconButton>
                <DialogContent dividers sx={{ display: 'flex', flexDirection: 'column', gap: '10px', mr: '20px', border: 'none', overflow: 'hidden' }}>
                    <TextField
                        type='text'
                        variant="standard"

                        fullWidth
                        InputProps={{ disableUnderline: true, }} size='small'
                        placeholder='Title of post....'
                        name='posttitle'
                        value={posttitle}
                        onChange={(e) => setPosttitle(e.target.value)}
                    />

                    <TextField multiline
                        type='text'
                        variant="standard"
                        InputProps={{ disableUnderline: true }}
                        name='postbody'
                        placeholder='What do you want to talk about?'
                        value={postbody}
                        onChange={(e) => setPostbody(e.target.value)}
                        minRows={12}
                    >

                    </TextField>
                    <i onClick={() => setShowemoji(!showemoji)} class="fa-regular fa-face-smile"></i>
                    {showemoji && <EmojiPicker
                        pickerStyle={{ width: '100%' }}

                    />}
                    <Stack
                        direction="row"
                        marginTop='10px'
                        alignItems='center'
                        spacing={3}
                    >
                        <Hover classt="fa-solid fa-image" name="Add media" />
                        <Hover classt="fa-solid fa-calendar-days" name="Create an event" />
                        <Hover classt="fa-solid fa-gift" name="Celebrate an occasion" />
                        <Hover classt="fa-solid fa-suitcase" name="Share that you are hiring" />
                    </Stack>
                </DialogContent>
                <DialogActions >
                    <Stack
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="center"
                        spacing={2}
                    >
                           <i class="fa-regular fa-clock"></i>

                        <Button  onClick={handleClose} variant='filled' >
                            Post
                        </Button>
                    </Stack>

                </DialogActions>
            </Dialog></>
    )
}
export default PostCreate