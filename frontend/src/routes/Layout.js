import React from 'react'
import { BrowserRouter as Router ,Route , Routes } from 'react-router-dom';
import SignUp from '../pages/SignUp/SignUp';


function Layout() {
  return (
   <Router>
    
    <Routes>
       
        <Route path='/' Component={SignUp} />
    </Routes>
   </Router>
  )
}

export default Layout