import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Navbar from '../../components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom';

import { logoutUser } from '../../Redux/auth/authAction';
import PostCreate from '../../components/PostCreate/PostCreate';
import PostCard from '../../components/PostCard/PostCard';
import { Stack } from '@mui/material';
import { fetchPostUser } from '../../Redux/post/postAction';


function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logged = useSelector(state => state.auth.logged);
console.log("logged value" , logged)


  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/Login');
  };
  const postData = useSelector(state=>state.post.data)
  console.log('postData: ', postData);
  useEffect(() => {
    dispatch(fetchPostUser());
    if (!logged) {
      navigate('/Login');
    }
  }, [logged, navigate , dispatch]);

  return (
   <Stack flexDirection={'column'} gap={'20px'}>
     <Navbar/>
     <PostCreate/>
     {postData?.map((post) => (
        <PostCard postId={post._id} body={post.body} title={post.title} images={post.images} user={post.user.name} />
      ))}
      <button onClick={handleLogout}>Logout</button>
     
   </Stack>
    
 
  );
}

export default Home;