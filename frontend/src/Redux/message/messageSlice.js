import { createSlice } from "@reduxjs/toolkit";
import { fetchMessageUser} from "./messageAction";




export const messageSlice = createSlice({
    name: 'message',
    initialState: {
      loading: false,
      error: null,
      success:false,
    
      messageData:[]
    },
    reducers: {
     addNewMessages(state,action){
        state.messageData=[...state.messageData , action.payload]

     }
    },
    extraReducers: (builder) => {
      builder
        // .addCase(postMessageUser.pending, (state) => {
        //   state.loading = true;
        //   state.error = null;
        // })
        // .addCase(postMessageUser.fulfilled, (state,action) => {
        //   console.log('action: ', action.payload);
        //   state.loading = false;
        //   state.success=true; 
        

        // })
        // .addCase(postMessageUser.rejected, (state, action) => {
        //   state.loading = false;
        //   state.error = action.error.message;
        //   console.log("errorrrr" , state.error)
        // })
        .addCase(fetchMessageUser.pending, (state) => {
          state.loading = true;
          state.error = null;
       
        })
        .addCase(fetchMessageUser.fulfilled, (state,action) => {
          state.loading = false;
          state.messageData = action.payload.data;
         // console.log("action of room",state.messageData)
          
        
        })
        .addCase(fetchMessageUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
         
        })
     
       
    },
  });
  export const {addNewMessages}=messageSlice.actions
  export default messageSlice.reducer;