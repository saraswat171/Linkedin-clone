import axios from "axios";
import { signUpAction } from "./authType";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const authUser = createAsyncThunk(
    signUpAction,
  async ({  email, password },{rejectWithValue}) => {
   try{
    const response = await axios.post('http://localhost:8080/usersinfo', {  email, password });

    return response.data;
   }
   catch(err){
    console.log("errpor" , err.response.data)
    return rejectWithValue(err.message);
  
   }
  }
);