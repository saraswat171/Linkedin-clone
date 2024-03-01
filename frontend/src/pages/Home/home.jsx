import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Navbar from '../../components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom';


import PostCreate from '../../components/PostCreate/PostCreate';
import PostCard from '../../components/PostCard/PostCard';
import { Stack ,Box} from '@mui/material';
import { fetchPostUser } from '../../Redux/post/postAction';

import ProfileCard from '../../components/Profile/Profile';


function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logged = useSelector(state => state.auth.logged);




  const postData = useSelector(state=>state.post.data)
  const logoutloader = useSelector((state)=>state.auth.logoutloading)
  const time = useSelector((state) => state.post)
  const loading = useSelector((state) => state.post.isLoading)
  const error = useSelector((state) => state.post.error)
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop + 300 < document.documentElement.offsetHeight || loading) {
   
      return;
    }
   
    if(postData.length < 15)
    {dispatch(fetchPostUser(time?.createdAt))}
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);



  useEffect(() => {
    dispatch(fetchPostUser(1));
    if (!logged) {
      navigate('/Login');
    }
  }, [logged, navigate ]);

  return (

<>
{logoutloader ? <Box sx={{fontSize:'60px', color:'Black',display:'flex' , alignItems:'center',justifyContent:'center' }}>Logging your out. Please wait ....... </Box> :    <Stack flexDirection={'column'} gap={'20px'} >
     <Navbar/>
 <Stack flexDirection={'row'} gap={'20px'} margin={'auto'}>
  <ProfileCard/>
 <Stack flexDirection={'column'} gap={'20px'}>
    <PostCreate/>
     {postData?.map((post) => (
        <PostCard postId={post?._id} body={post?.body} title={post?.title} images={post?.images} users={post?.user.name} profile={post?.user.iamge} />
      ))}
    </Stack>
 </Stack>
     
   </Stack>}
</>
    
 
  );
}

export default Home;