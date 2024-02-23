import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { ReactionFetchAction, ReactionUserAction } from "./reactionType";


export const postReactionUser = createAsyncThunk(
    ReactionUserAction,
    async (reactionData, { rejectWithValue,getState }) => {
        console.log('reactionData: ', reactionData?.reaction);
     
        try{  const token = getState().auth.token;
          
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };
            const response = await axios.post(`http://localhost:8080/post/${reactionData.postId}/reaction`, reactionData.reaction , config);
            console.log('response: ', response);
            return response;
        }
        catch (err) {
           
            return rejectWithValue(err.response.data);

        }
    }
);
export const fetchReactionUser= createAsyncThunk(ReactionFetchAction, async (postId)=>{

    const res =await axios.get(`http://localhost:8080/post/${postId}/reaction`);

    const data =  res.data;
    return data;
})