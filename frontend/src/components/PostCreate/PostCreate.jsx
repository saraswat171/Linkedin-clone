import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import './PostCreate.css'
import EmojiPicker from 'emoji-picker-react';
import Hover from '../Hover';

import { useDispatch } from 'react-redux';
import { postUser } from '../../Redux/post/postAction';
import backgroundimg from '../../Assets/images/painting-mountain-lake-with-mountain-background_188544-9126.avif'

function PostCreate() {
    const theme = useTheme();
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    const [postbody, setPostbody] = useState('')
    const [posttitle, setPosttitle] = useState('')
    const [postimage, setPostimage] = useState('')
    const [showemoji, setShowemoji] = useState(false);
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleFilesChange = (e) => {
        var file = [];
        for (let i = 0; i < e.target.files.length; i++) {
            file = [...file, e.target.files[i]];
        }
        // const file [] = e.target.files;
        setPostimage(file);
    };

    // const user = useSelector(state=>state.auth.user)
    // console.log("user re", user)
    const handleSubmit = async (e) => {

        e.preventDefault();
        if (!postimage) {
            alert("Upload Image")
        }

        const formdata = new FormData();
        formdata.append('title', posttitle);
        formdata.append('body', postbody);
        for (let i = 0; i < postimage?.length; i++) {
            formdata.append('images', postimage[i])
        }

        try {
            dispatch(postUser( formdata ));

        }
        catch (err) {
            alert(err);
        }
        handleClose()
        setPostbody('')
        setPosttitle('')
        setPostimage(null)

    }

    return (
        <Stack margin={'auto'} border={'0'}>
            <Box className="post-container">
                <Box className="post-container-a" sx={{ padding: '10px' }}>

                    <img className="image" src={backgroundimg} alt='' ></img>
                    <Box className="post-head" onClick={handleClickOpen} >Start a post</Box>
                </Box>
                <Box className="post-bottom">
                    <Box className="list-item">
                        <i class="fa-solid fa-image" style={{color:'#378FE9'}}></i>

                        <h1 className='post-heading'>Media</h1>
                    </Box>
                    <Box className="list-item">
                        <i class="fa-solid fa-calendar-days"  style={{color:'#C37D16'}}></i>
                        <h1 className='post-heading'>Job</h1>
                    </Box>
                    <Box className="list-item">
                        <i class="fa-regular fa-newspaper" style={{color:'#E06847'}}></i>

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
                            <Typography sx={{ fontSize: '20px' }}> name


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
                <Box component={'form'} onSubmit={handleSubmit} encType='multipart/form-data'>
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
                            required
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

                            <Button
                                sx={{ minWidth: '0px', padding: '0px' }}
                                component="label"
                            >
                                <Hover classt="fa-solid fa-image" name="Add media" />
                                <input
                                    type="file"
                                    name='postimage'

                                    multiple
                                    id="" onChange={handleFilesChange}
                                    hidden
                                />
                            </Button>
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

                            <Button type='submit' variant='filled' >
                                Post
                            </Button>
                        </Stack>

                    </DialogActions>
                </Box>
            </Dialog>

        </Stack>
    )
}
export default PostCreate