import { createSlice } from "@reduxjs/toolkit";
import { commentUser } from "./commentAction";


export const commentSlice = createSlice({
    name: 'comment',
    initialState: {
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
        .addCase(commentUser.fulfilled, (state) => {
          state.loading = false;
          state.success=true;
          console.log(' state' , state.success)
          
        })
        .addCase(commentUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
          console.log("errorrrr" , state.error)
        })
        // .addCase(fetchPostUser.pending, (state) => {
        //   state.loading = true;
        //   state.error = null;
       
        // })
        // .addCase(fetchPostUser.fulfilled, (state,action) => {
        //   state.loading = false;
        //   state.data = action.payload;
        //   console.log("action",state.data)
        
        // })
        // .addCase(fetchPostUser.rejected, (state, action) => {
        //   state.loading = false;
        //   state.error = action.payload;
         
        // })
       
    },
  });

  export default commentSlice.reducer;