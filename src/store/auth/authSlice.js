import { createSlice } from '@reduxjs/toolkit';
import { hendleSignIn, hendleSignOut, hendleSignUp } from './authOperations';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isSignedIn: false,
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(hendleSignUp.pending, state => {
                state.isLoading = true;
            })
            .addCase(hendleSignUp.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isSignedIn = true;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(hendleSignUp.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(hendleSignIn.pending, state => {
                state.isLoading = true;
            })
            .addCase(hendleSignIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isSignedIn = true;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(hendleSignIn.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(hendleSignOut.pending, state => {
                state.isLoading = true;
            })
            .addCase(hendleSignOut.fulfilled, (state, action) => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isSignedIn = false;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(hendleSignOut.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const authReducer = authSlice.reducer;
