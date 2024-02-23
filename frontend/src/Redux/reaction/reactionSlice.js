import { createSlice } from "@reduxjs/toolkit";
import { fetchReactionUser, postReactionUser } from "./reactionAction";


export const reactionSlice = createSlice({
    name: 'reaction',
    initialState: {
      loading: false,
      error: null,
      success:false,
    
    },
    reducers: {
     
    },
    extraReducers: (builder) => {
      builder
        .addCase(postReactionUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(postReactionUser.fulfilled, (state) => {
          state.loading = false;
          state.success=true;
          console.log(' state' , state.success)
          
        })
        .addCase(postReactionUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
          console.log("errorrrr" , state.error)
        })
        .addCase(fetchReactionUser.pending, (state) => {
          state.loading = true;
          state.error = null;
       
        })
        .addCase(fetchReactionUser.fulfilled, (state,action) => {
          state.loading = false;
          state.data = action.payload;
          console.log("action",state.data)
        
        })
        .addCase(fetchReactionUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
         
        })
       
    },
  });

  export default reactionSlice.reducer;