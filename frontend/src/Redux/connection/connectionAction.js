import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { connectionFetchAction, connectionPostAction, connectionUpdateAction, suggestionFetchAction } from "./connectionType";

export const connectionUser = createAsyncThunk(
    connectionPostAction,
    async (id, { rejectWithValue, getState }) => {
    
       
        try {
            const token = getState().auth.token;
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };
           
            const response = await axios.post(`http://localhost:8080/user/connection/${id}`,null, config);
            
            return response.data;
        }
        catch (err) {
           
            return rejectWithValue(err.response.data);

        }
    }
);

export const fetchconnectionUser = createAsyncThunk(
    connectionFetchAction,
    async ( { rejectWithValue, getState }) => {
        try {
            const token = localStorage.getItem('token')
            console.log('hekko' )
          
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };
           
            const response = await axios.get(`http://localhost:8080/user/connection`, config);
            
            return response.data;
        }
        catch (err) {
           
            return rejectWithValue(err.response.data);

        }
    }
);
export const fetchsuggestionUser = createAsyncThunk(
   
    suggestionFetchAction,
    async ( { rejectWithValue, getState }) => {
        
        
        try {
            const token = localStorage.getItem('token')
            
          
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };
        
            const response = await axios.get(`http://localhost:8080/user/suggestion`, config);

            
            return response.data;
        }
        catch (err) {
           
            return rejectWithValue(err.response.data);

        }
    }
);

export const updateconnectionUser = createAsyncThunk(
    connectionUpdateAction,
    async (data, { rejectWithValue, getState }) => {
    
        try {
            const token = getState().auth.token;
          
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };
           
            const response = await axios.put(`http://localhost:8080/user/suggestion/${data.connectionId}`, data.status,config);
            
            return response.data;
        }
        catch (err) {
           
            return rejectWithValue(err.response.data);

        }
    }
);