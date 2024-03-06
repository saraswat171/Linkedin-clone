import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { MessageFetchAction } from "./messageType";




// export const postMessageUser = createAsyncThunk(
//     MessageUserAction,
//     async (data, { rejectWithValue, getState }) => {


//         try {
//             const token = getState().auth.token;
//             const config = {
//                 headers: {
//                     'authorization': `Bearer ${token}`
//                 }
//             };
//             const response = await axios.post(`http://localhost:8080/roommessage`, data, config); // data has roomid and message 

//             console.log('response: ', response);
//             return response;
//         }
//         catch (err) {

//             return rejectWithValue(err.response);


//         }
//     }
// );


export const fetchMessageUser = createAsyncThunk(
    MessageFetchAction,
    async (id,{ rejectWithValue,getState}) => {
      //  console.log('id: mm', id);

        const roomId=id;
        try {
            const token = getState().auth.token;
           // console.log('token: ', token);
         
            const config = {
                headers: {
                    'authorization': `Bearer ${token}`
                }
            };
            const response = await axios.get(`http://localhost:8080/allroommessages/${roomId}`, config);

           // console.log('response:messs ', response);
            return response;
        }
        catch (err) {

            return rejectWithValue(err.response);


        }
    }
);