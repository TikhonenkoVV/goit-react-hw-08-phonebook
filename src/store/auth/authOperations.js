import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const hendleSignUp = createAsyncThunk(
    'auth/signUp',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(
                'https://connections-api.herokuapp.com/users/signup',
                credentials
            );
            setAuthHeader(data.token);
            return data;
        } catch (err) {
            rejectWithValue(err.message);
        }
    }
);

export const hendleSignIn = createAsyncThunk(
    'auth/signIn',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(
                'https://connections-api.herokuapp.com/users/login',
                credentials
            );
            setAuthHeader(data.token);
            return data;
        } catch (err) {
            rejectWithValue(err.message);
        }
    }
);

export const hendleSignOut = createAsyncThunk(
    'auth/signout',
    async (_, { rejectWithValue }) => {
        try {
            await axios.post(
                'https://connections-api.herokuapp.com/users/logout'
            );
            setAuthHeader('');
        } catch (err) {
            rejectWithValue(err.message);
        }
    }
);

export const hendleRefreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, { rejectWithValue, getState }) => {
        const state = getState();
        const persistToken = state.auth.token;
        if (persistToken === null) {
            return rejectWithValue();
        }

        setAuthHeader(persistToken);
        try {
            const { data } = await axios.get(
                'https://connections-api.herokuapp.com/users/current'
            );
            return data;
        } catch (err) {
            rejectWithValue(err.message);
        }
    }
);
