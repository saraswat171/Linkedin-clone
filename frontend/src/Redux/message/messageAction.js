import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { MessageFetchAction, MessageUserAction } from "./messageType";




export const postMessageUser = createAsyncThunk(
    MessageUserAction,
    async (data, { rejectWithValue, getState }) => {


        try {
            const token = getState().auth.token;
            const config = {
                headers: {
                    'authorization': `Bearer ${token}`
                }
            };
            const response = await axios.post(`http://localhost:8080/mszroute`, data, config); // data has roomid and message 

            console.log('response: ', response);
            return response;
        }
        catch (err) {

            return rejectWithValue(err.response);


        }
    }
);


export const fetchMessageUser = createAsyncThunk(
    MessageFetchAction,
    async ({ rejectWithValue }) => {

        
        try {
            const token = localStorage.getItem('token')
            
            console.log('hhhhh')

            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };
            const response = await axios.get(`http://localhost:8080/msxroute`, config);

            console.log('response: ', response);
            return response;
        }
        catch (err) {

            return rejectWithValue(err.response);


        }
    }
);