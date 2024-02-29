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



  // const handleLogout = () => {
  //   dispatch(logoutUser());
  //   navigate('/Login');
  // };
  const postData = useSelector(state=>state.post.data)
  const logoutloader = useSelector((state)=>state.auth.logoutloading)
  useEffect(() => {
    dispatch(fetchPostUser());
    if (!logged) {
      navigate('/Login');
    }
  }, [logged, navigate , dispatch]);

  return (

<>
{logoutloader ? <Box sx={{fontSize:'60px', color:'Black',display:'flex' , alignItems:'center',justifyContent:'center' }}>Logging your out. Please wait ....... </Box> :    <Stack flexDirection={'column'} gap={'20px'} >
     <Navbar/>
 <Stack flexDirection={'row'} gap={'20px'} margin={'auto'}>
  <ProfileCard/>
 <Stack flexDirection={'column'} gap={'20px'}>
    <PostCreate/>
     {postData?.map((post) => (
        <PostCard postId={post?._id} body={post?.body} title={post?.title} images={post?.images} user={post?.user.name} profile={post?.user.iamge} />
      ))}
    </Stack>
 </Stack>
     
   </Stack>}
</>
    
 
  );
}

export default Home;