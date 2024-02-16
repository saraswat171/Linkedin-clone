import React from "react";
import Dialog from '@mui/material/Dialog';

import { useDispatch } from 'react-redux';
import { toggleSuccess } from "../../Redux/auth/authSlice";
function DialogBox({ open, handleClose }) {
    const dispatch = useDispatch();
    return (
        <Dialog open={open}     onClose={()=>{
            dispatch(toggleSuccess())
        }}>
            Sign Up successfully 
            {/* <button onClick={() => {
                dispatch(toggleSuccess())
            }} >close</button> */}
        
        </Dialog>
    )
}
export default DialogBox