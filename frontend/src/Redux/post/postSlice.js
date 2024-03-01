import { createSlice } from "@reduxjs/toolkit";
import { fetchPostUser, postUser } from "./postAction";
 const initialState = {
  loading: false,
  isLoading:false,
  error: null,
  success:false,
  data:null,
  createdAt: null,
}
export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
     
      resetpost: () => {console.log("here");return initialState},
    
    },
    extraReducers: (builder) => {
      builder
        .addCase(postUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(postUser.fulfilled, (state , action) => {
          state.loading = false;
          state.success=true;
          state.data=[action.payload, ...state.data]
          console.log(' state' , state.success)
          
        })
        .addCase(postUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
          console.log("errorrrr" , state.error)
        })
        .addCase(fetchPostUser.pending, (state) => {
          state.isLoading = true;
          state.error = null;
       
        })
        .addCase(fetchPostUser.fulfilled, (state,action) => {
          state.isLoading = false;
          //state.data = action.payload;
          state.data = [...(state.data || []), ...action.payload]
          state.createdAt = action.payload[action.payload.length - 1]?.createdAt
          console.log("action",state.data)
        
        })
        .addCase(fetchPostUser.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
         
        })
       
    },
  });
  export const {resetpost}=postSlice.actions
  export default postSlice.reducer;