import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import { useNavigate } from 'react-router-dom';

import { logoutUser } from '../../Redux/auth/authAction';

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logged = useSelector(state => state.auth.logged);
console.log("logged value" , logged)


  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/Login');
  };

  useEffect(() => {
    if (!logged) {
      navigate('/Login');
    }
  }, [logged, navigate]);

  return (
    <div className='container'>
      <div className='headings'>
        <h1 style={{color:'black'}}>Welcome !</h1>
        <p>You are now logged in.</p>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;