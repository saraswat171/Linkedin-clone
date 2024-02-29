import { createSlice } from "@reduxjs/toolkit";
import { commentUser, fetchCommentUser } from "./commentAction";


export const commentSlice = createSlice({
    name: 'comment',
    initialState: {
      commentdata:{},
      loading: false,
      error: null,
      success:false,
    
    },
    reducers: {
     
    },
    extraReducers: (builder) => {
      builder
        .addCase(commentUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(commentUser.fulfilled, (state,action) => {
          state.loading = false;
          state.success=true;
        //  console.log('state.commentsData[action.payload.postId]: ', state.commentsData);
          console.log(' state' , action.payload)
          state.commentdata[action.payload.postId] = [action.payload.info,...state.commentdata[action.payload.postId]];
          
        })
        .addCase(commentUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
          console.log("errorrrr" , state.error)
        })
        .addCase(fetchCommentUser.pending, (state) => {
          state.loading = true;
          state.error = null;
       
        })
        .addCase(fetchCommentUser.fulfilled, (state,action) => {
          state.loading = false;
          state.commentdata[action.payload.postId]=action.payload.data
          console.log('commentdata: ', state.commentdata);
       
        
        })
        .addCase(fetchCommentUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
         
        })
       
    },
  });

  export default commentSlice.reducer;