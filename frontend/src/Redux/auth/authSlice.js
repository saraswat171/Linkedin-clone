import { createSlice } from "@reduxjs/toolkit";
import { authUser } from "./authAction";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
      loading: false,
      error: null,
      success:false,
    },
    reducers: {
        toggleSuccess:(state,action)=>{
     state.success=false;
        }
    },
    extraReducers: (builder) => {
      builder
        .addCase(authUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(authUser.fulfilled, (state) => {
          state.loading = false;
          state.success=true;
          console.log(' state' , state.success)
          
        })
        .addCase(authUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  export const {toggleSuccess}=authSlice.actions
  export default authSlice.reducer;