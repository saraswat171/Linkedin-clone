import { createSlice } from "@reduxjs/toolkit";
import { fetchRoomUser, postRoomUser } from "./roomAction";



export const roomSlice = createSlice({
    name: 'room',
    initialState: {
      loading: false,
      error: null,
      success:false,
    
      roomdata:{}
    },
    reducers: {
     
    },
    extraReducers: (builder) => {
      builder
        .addCase(postRoomUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(postRoomUser.fulfilled, (state,action) => {
          console.log('action: ', action.payload);
          state.loading = false;
          state.success=true; 
        

        })
        .addCase(postRoomUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
          console.log("errorrrr" , state.error)
        })
        .addCase(fetchRoomUser.pending, (state) => {
          state.loading = true;
          state.error = null;
       
        })
        .addCase(fetchRoomUser.fulfilled, (state,action) => {
          state.loading = false;
          state.roomdata = action.payload.data;
          console.log("action of room",state.roomdata.data)
          
        
        })
        .addCase(fetchRoomUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
         
        })
     
       
    },
  });

  export default roomSlice.reducer;