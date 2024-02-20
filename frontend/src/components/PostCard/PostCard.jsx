import * as React from 'react';
import './PostCard.css'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import SendSharpIcon from '@mui/icons-material/SendSharp';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpOffAltRoundedIcon from '@mui/icons-material/ThumbUpOffAltRounded';
import AddIcon from '@mui/icons-material/Add';
import { Button, Divider, Stack } from '@mui/material';




export default function PostCard({body , title , images , user}) {


     
 const [seemore , setSeemore]= React.useState(true)

    
    return (
      <Stack margin={'auto'} >
          <Card sx={{ width: 555 }}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" sx={{ height: '50px', width: '50px' }}>
                        <img alt=''></img>
                    </Avatar>
                }
                action={
                    <IconButton sx={{ color: '#3F73C3' }}>
                        <AddIcon />
                        < Typography sx={{ color: '' }}>Follow</Typography>
                    </IconButton>
                }
                title={user}
                subheader="September 14, 2016"
            />
            <CardContent>
                <Typography fontSize={'15px'} color="text.secondary" >
                   {title}
                </Typography>
           
                <Typography fontSize={'15px'} color="text.secondary"  height= {seemore ? '40px':'auto'} sx={{overflow:'hidden'}}>
             {body}
                </Typography>
             
                
<Button className="seemore" onClick={() => { setSeemore(!seemore) }} sx={{textTransform:'lowercase'}} >{!seemore ? <>...less</> : <>...more</>}</Button>








             </CardContent> 
           {/* {images?.map((i)=>{
          
 <CardMedia
 component="img"
 height="auto"
 // {imagesdata?.map((i)=>
 //     <img src={`http://localhost:8080/${i.image}`} alt='hjghfv' ></img>
 // {images?.map((i)=> image={`http://localhost:8080/${i.image}`} )
 image={`http://localhost:8080/${i[0]}`}
 alt="uy"
/>
           }
          
           )}   */}
           {(images.length !== 0)  && <CardMedia
        component="img"
        height="194"
        image={`http://localhost:8080/${images[0]}`}
        alt="post image"
      />}
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography fontSize={'12px'} color="text.secondary" display={'flex'} alignItems={'center'} gap={'3px'}
                >
                    <ThumbUpOutlinedIcon fontSize='16px' className='like-icon' /> 100
                </Typography>
                <Typography fontSize={'12px'} color="text.secondary">
                    10 Comments
                </Typography>
               
            </CardContent>
            <CardContent>
            <Divider/>
            </CardContent>
                 
            <CardActions sx={{ display: 'flex', justifyContent: 'space-around' }}>
                <IconButton sx={{ gap: '10px' }} >
                    <ThumbUpOffAltRoundedIcon fontSize='20px' />
                    <Typography fontSize={'14px'}>Like</Typography>
                </IconButton>
                <IconButton sx={{ gap: '10px' }} >

                    <i class="fa-regular fa-comment" style={{ height: '20px', width: '20px' }}></i>
                    <Typography fontSize={'14px'}>Comment</Typography>
                </IconButton>

                <IconButton sx={{ gap: '10px' }} >

                    <RepeatOutlinedIcon fontSize='20px' />
                    <Typography fontSize={'14px'}>Repost</Typography>
                </IconButton>

                <IconButton sx={{ gap: '10px' }} >

                <i class="fa-solid fa-paper-plane"  style={{ height: '18px', width: '18px' }}></i>
                    <Typography fontSize={'14px'}>Send</Typography>
                </IconButton>
            </CardActions>



        </Card>
      </Stack>
    );
}
