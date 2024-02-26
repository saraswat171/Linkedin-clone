import { createSlice } from "@reduxjs/toolkit";
import { deleteReactionUser, fetchReactionUser, postReactionUser } from "./reactionAction";


export const reactionSlice = createSlice({
    name: 'reaction',
    initialState: {
      loading: false,
      error: null,
      success:false,
      data:{}
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
          state.data[action.payload.id] = action.payload.data;
          // console.log("action of reaction",state.data)
        
        })
        .addCase(fetchReactionUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
         
        })
        .addCase(deleteReactionUser.pending, (state) => {
          state.isLoading = true;
      })
      .addCase(deleteReactionUser.fulfilled, (state, action) => {
          state.isLoading = false;
          state.delete = action.payload
         

      })
      .addCase(deleteReactionUser.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload
      })
       
    },
  });

  export default reactionSlice.reducer;