import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice'
import postReducer from './post/postSlice'
import commentReducer from './comment/commentSlice'
import reactionReducer from './reaction/reactionSlice'
import connectionReducer from './connection/connectionSlice'
import roomReducer from './room/roomSlice'
export default configureStore({
  reducer: {
  
   auth:authReducer,
   post:postReducer,
   comment:commentReducer,
   reaction:reactionReducer,
   connection:connectionReducer,
   room:roomReducer,
  
  },
});