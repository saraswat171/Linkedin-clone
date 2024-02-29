import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { ReactionDeleteAction, ReactionFetchAction, ReactionUserAction } from "./reactionType";


export const postReactionUser = createAsyncThunk(
    ReactionUserAction,
    async (reactionData, { rejectWithValue,getState }) => {
        
     
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
export const fetchReactionUser= createAsyncThunk(ReactionFetchAction, async (postId, { rejectWithValue })=>{

  try{
    const res =await axios.get(`http://localhost:8080/post/${postId}/reaction`);
    const postReaction={};

     postReaction.data =  res.data;
     postReaction.id=postId
    
    return postReaction;
  }
    catch (err) {
           
        return rejectWithValue(err.response.data);

    }
})
export const deleteReactionUser = createAsyncThunk(ReactionDeleteAction, async (reactionId, { rejectWithValue, getState }) => {
    try {
        console.log('delete kro')
        const token = getState().auth.token;
        
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
      
        const res = await axios.delete(`http://localhost:8080/post/reaction/${reactionId}`, config)
      const info = res.data;

        return {reactionId , info}
    }
    catch (error) {
       
        return rejectWithValue(error.response.data)
    }
})