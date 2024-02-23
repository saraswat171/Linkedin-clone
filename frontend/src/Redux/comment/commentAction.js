import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { commentFetchAction, commentPostAction } from "./commentType";
export const commentUser = createAsyncThunk(
    commentPostAction,
    async (data, { rejectWithValue, getState }) => {
       const body =data.commentbody
        try {
            const token = getState().auth.token;
          
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };
           
            const response = await axios.post(`http://localhost:8080/post/${data.postId}/comments`,body , config);
            
            return response.data;
        }
        catch (err) {
           
            return rejectWithValue(err.response.data);

        }
    }
);

export const fetchCommentUser = createAsyncThunk(commentFetchAction, async (postId , {rejectWithValue})=>{
    // const postId=datatofetch.postId;

  try{
    const res =await axios.get(`http://localhost:8080/post/${postId}/comments`);
    const data =  res.data;

    return {postId,data};
  }
  catch (err) {
           
    return rejectWithValue(err.response.data);

}
})