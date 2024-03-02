import React from 'react'
import { BrowserRouter as Router ,Route , Routes, Navigate } from 'react-router-dom';
import SignUp from '../pages/SignUp/SignUp';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/home';
import Mynetwork from '../pages/Network/Mynetwork';
import Messages  from '../pages/Messages/Messages'
import Myprofile from '../pages/Myprofile/Myprofile';

function Layout() {

  const PrivateRoute = ({ children }) => {
    const isAuth = localStorage.getItem("token");
    return isAuth === null ? <Navigate to="/Login" /> : <>{children}</>;
  };
  return (
   <Router>
    
    <Routes>
        <Route path='/Login' Component={Login} />
        <Route path='/' Component={SignUp} />
        <Route path='/home'   element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }/>
        <Route path='/mynetwork'  element={
            <PrivateRoute>
              <Mynetwork/>
            </PrivateRoute>
          }/>
          <Route path='/message' element={
            <PrivateRoute>
              <Messages />
            </PrivateRoute>
          } />
          <Route path='/myprofile' element={
            <PrivateRoute>
              <Myprofile />
            </PrivateRoute>
          } />
    </Routes>
   </Router>
  )
}

export default Layout