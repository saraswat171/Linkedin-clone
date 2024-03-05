import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { RoomFetchAction, RoomUserAction } from "./roomType";



export const postRoomUser = createAsyncThunk(
    RoomUserAction,
    async (receiverId, { rejectWithValue, getState }) => {


        try {
            const token = getState().auth.token;
            const config = {
                headers: {
                    'authorization': `Bearer ${token}`
                }
            };
            const response = await axios.post(`http://localhost:8080/roomCreate`, receiverId, config);

            console.log('response: ', response);
            return response;
        }
        catch (err) {

            return rejectWithValue(err.response);


        }
    }
);
export const fetchRoomUser = createAsyncThunk(
    RoomFetchAction,
    async ({ rejectWithValue }) => {

        
        try {
            const token = localStorage.getItem('token')
            
            console.log('hhhhh')

            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };
            const response = await axios.get(`http://localhost:8080/roomGet`, config);

            console.log('response: ', response);
            return response;
        }
        catch (err) {

            return rejectWithValue(err.response);


        }
    }
);