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
            console.log('response: ', response);
            
            return response.data;
        }
        catch (err) {
           
            return rejectWithValue(err.response.data);

        }
    }
);
export const fetchsuggestionUser = createAsyncThunk(
   
    suggestionFetchAction,
    async ( { rejectWithValue}) => {
        
        
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
    async (data, { rejectWithValue}) => {
    
        try {
            const token =  localStorage.getItem('token');
            console.log('connectionId: ', data.status);
          
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };
           
            const response = await axios.put(`http://localhost:8080/user/connection/${data.connectionId}`, data.status,config);
            const connectionId =data.connectionId;
            const info= response.data;
            return {connectionId , info};
        }
        catch (err) {
           
            return rejectWithValue(err.response.data);

        }
    }
);