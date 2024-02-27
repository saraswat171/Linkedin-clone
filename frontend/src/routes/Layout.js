import React from 'react'
import { BrowserRouter as Router ,Route , Routes } from 'react-router-dom';
import SignUp from '../pages/SignUp/SignUp';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/home';
import Mynetwork from '../pages/Network/Mynetwork';


function Layout() {
  return (
   <Router>
    
    <Routes>
        <Route path='/Login' Component={Login} />
        <Route path='/' Component={SignUp} />
        <Route path='/home' Component={Home}/>
        <Route path='/mynetwork' Component={Mynetwork}/>
    </Routes>
   </Router>
  )
}

export default Layout