import axios from "axios";
import { fetchPostAction, postUserAction } from "./postType";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const postUser = createAsyncThunk(
    postUserAction,
    async (formdata, { rejectWithValue, getState }) => {
        try {
            const token = getState().auth.token;
          
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };
            const response = await axios.post('http://localhost:8080/posts', formdata, config);
            return response.data;
        }
        catch (err) {
           
            return rejectWithValue(err.response.data);

        }
    }
);

export const fetchPostUser= createAsyncThunk(fetchPostAction, async (time, { rejectWithValue})=>{

   try{
    console.log("time at action" , time)
    //time=${time}
   let res={}
    if(time !== 1) {
         res =await axios.get(`http://localhost:8080/posts?time=${time}`);
    }
    else {
        res =await axios.get(`http://localhost:8080/posts`);
    }
    

    console.log(res)
    const data =  res.data;
    return data;
   }
   catch (err) {
           
    return rejectWithValue(err.response.data);

}
})



