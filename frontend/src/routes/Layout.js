import React from 'react'
import { BrowserRouter as Router ,Route , Routes } from 'react-router-dom';
import SignUp from '../pages/SignUp/SignUp';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/home';


function Layout() {
  return (
   <Router>
    
    <Routes>
        <Route path='/Login' Component={Login} />
        <Route path='/' Component={SignUp} />
        <Route path='/home' Component={Home}/>
    </Routes>
   </Router>
  )
}

export default Layout