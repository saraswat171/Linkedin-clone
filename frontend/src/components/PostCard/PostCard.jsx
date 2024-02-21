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
import { Button, Divider,  Stack } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Comment from '../Comments/Comment';
import PublicIcon from '@mui/icons-material/Public';
import CommentCard from '../CommentCard/CommentCard';

export default function PostCard({body , title , images , user,postId}) {


 
 const [seemore , setSeemore]= React.useState(true)
 const [seecomment, setSeecomment]= React.useState(false)
 const handleCommentClick=()=>{
    setSeecomment(!seecomment)
 }
    
    return (
      <Stack margin={'auto'} >
          <Card sx={{ width: 555 ,boxShadow:'none' }} >
            <CardHeader  sx={{ pl:'16px' , pt:'12px',pb:'8px',pr:'16px' }}
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
                // {`${user} `}
                title={<Stack flexDirection={'row'} alignItems={'center'} gap={'5px'}>
                  
                    <Typography fontSize={'14px'} color={'Black'}> {user}</Typography>
                 <FiberManualRecordIcon sx={{height:'5px', width:'5px'}}/>
                <Typography fontSize={'14px'} color={'grey'}> 1st +</Typography>
                </Stack>}
                subheader={
                    <Stack flexDirection={'column'}>
                        <Typography fontSize={'12px'} color={'grey'}>Designation</Typography>
                        <Stack flexDirection={'row'} alignItems={'center'} gap={'5px'}>
                            <Typography fontSize={'12px'} color={'grey'}>2hr</Typography>
                            <FiberManualRecordIcon sx={{height:'5px', width:'5px'}}/>
                            <PublicIcon sx={{height:'16px', width:'16px'}}/>
                        </Stack>
                    </Stack>
                }
            />
            <CardContent  sx={{ pl:'12px' , pt:'8px',pb:'8px',pr:'16px' }}>
                <Typography fontSize={'15px'} color="text.secondary" >
                   {title}
                </Typography>
           
                <Typography fontSize={'15px'} color="text.secondary"   sx={{overflow:'hidden',height:seemore? '20px' : 'auto' , wordBreak:'break-word'}}>
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
           {/* {(images.length === 1)  ? <CardMedia
        component="img"
        height="194"
        image={`http://localhost:8080/${images}`}
        alt="post image"
      /> : <CardMedia  
      height="194"> <Stack direction="column" spacing={2} sx={{ width: '555px', overflow: 'auto' }}  justifyContent="center" > 
      {images.map((image) => (
        <img src={`http://localhost:8080/${image}`} alt='' key={image} />
      ))}
    </Stack></CardMedia>} */}
    {/* <CardMedia
        component="img"
        height="194"
        image={`http://localhost:8080/${images[currentImageIndex]}`}
        alt="post image"
      />
      {images.length > 1 && (
       <Carousel
          value={currentImageIndex}
          onChange={handleSliderChange}
          min={0}
          max={images.length - 1}
          step={1}
          aria-label="Image slider"
        />
      )} */}
      <Carousel>
        {images.map((image,index)=>(
            <CardMedia sx={{pb:0}} 
                key={index}
                component="img"
                 height={'auto'}
        image={`http://localhost:8080/${image}`}
        alt="post image"
            /> 
         
              
        ))}
      </Carousel >
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pl:'12px' , pt:'8px',pb:'8px',pr:'16px'}}>
                <Typography fontSize={'12px'} color="text.secondary" display={'flex'} alignItems={'center'} gap={'3px'}
                >
                    <ThumbUpOutlinedIcon fontSize='16px' className='like-icon' /> 100
                </Typography>
                <Typography fontSize={'12px'} color="text.secondary">
                    10 Comments
                </Typography>
               
            </CardContent>
           
            <Divider className='divider' sx={{marginLeft:'16px',
    marginRight: '16px',padding:'0px'
   }}/>  
            <CardActions sx={{ display: 'flex', justifyContent: 'space-around' }}>
                <IconButton sx={{ gap: '10px' }} >
                    <ThumbUpOffAltRoundedIcon fontSize='20px' />
                    <Typography fontSize={'14px'}>Like</Typography>
                </IconButton>
                <IconButton sx={{ gap: '10px' }} onClick={handleCommentClick} >

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

           {seecomment &&  <Comment postId={postId}/>}
           {seecomment &&  <CommentCard postId={postId}/>}


        </Card>
        
      </Stack>
    );
}
