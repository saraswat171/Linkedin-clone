import { createSlice } from "@reduxjs/toolkit";
import { connectionUser, fetchconnectionUser, fetchsuggestionUser, updateconnectionUser } from "./connectionAction";


export const connectionSlice = createSlice({
    name: 'connection',
    initialState: {
      connectiondata:{},
      acceptedData:[],
      requestData:[],
      suggestiondata:{},
      updateState:false,
      StatusData:{},
      loading: false,
      error: null,
      success:false,
      suggestionstate:false,
      connectionstate:false,
    
    },
    reducers: {
     
    },
    extraReducers: (builder) => {
      builder
        .addCase(connectionUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(connectionUser.fulfilled, (state) => {
          state.loading = false;
          state.success=true;
          state.connectionstate=true;
          console.log(' state' , state.success)
          
        })
        .addCase(connectionUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
          console.log("errorrrr" , state.error)
        })
        .addCase(fetchconnectionUser.pending, (state) => {
          state.loading = true;
          state.error = null;
       
        })
        .addCase(fetchconnectionUser.fulfilled, (state,action) => {
          state.loading = false;
          state.connectiondata=action.payload
          state.acceptedData = state.connectiondata['Accepted'];
          state.requestData = state.connectiondata['Pending'];
          console.log('request data: ', state.acceptedData);
          
        
        })
        .addCase(fetchconnectionUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
         
        })
        .addCase(fetchsuggestionUser.pending, (state) => {
            state.loading = true;
            state.error = null;
         
          })
          .addCase(fetchsuggestionUser.fulfilled, (state,action) => {
            state.loading = false;
            state.suggestiondata=action.payload;
            state.suggestionstate=true;
            console.log('suggestiondata: ', state.suggestiondata);
         
          
          })
          .addCase(fetchsuggestionUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
           
          })
          .addCase(updateconnectionUser.pending, (state) => {
            state.loading = true;
            state.error = null;
         
          })
          .addCase(updateconnectionUser.fulfilled, (state,action) => {
            state.loading = false;
            state.StatusData=action.payload;
            state.updateState=true;
            console.log('suggestiondata: ', state.StatusData);
            const data = state.requestData.filter((item) => item?._id !== action.payload.connectionId)
            state.requestData = data;
         
          
          })
          .addCase(updateconnectionUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
           
          })
          
       
    },
  });

  export default connectionSlice.reducer;
