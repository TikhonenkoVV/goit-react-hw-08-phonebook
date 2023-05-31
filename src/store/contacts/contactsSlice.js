import { createSlice } from '@reduxjs/toolkit';
import {
    hendleAddContact,
    hendleDeleteContact,
    hendleFetchContact,
    hendleFetchContactById,
} from './contactsOperations';
import { normalizeContact, normalizePayload } from 'services/normalize';

const initialState = {
    contactsArray: [],
    isLoading: false,
    error: null,
    contact: {},
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(hendleFetchContact.pending, state => {
                state.isLoading = true;
            })
            .addCase(hendleFetchContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                const res = normalizePayload(action.payload);
                state.contactsArray = res;
                state.currentImg = '';
                state.contact = {};
            })
            .addCase(hendleFetchContact.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(hendleFetchContactById.pending, state => {
                state.isLoading = true;
            })
            .addCase(hendleFetchContactById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                const res = normalizeContact(action.payload);
                state.contact = res;
            })
            .addCase(hendleFetchContactById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(hendleAddContact.pending, state => {
                state.isLoading = true;
            })
            .addCase(hendleAddContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.contactsArray.push(action.payload);
            })
            .addCase(hendleAddContact.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(hendleDeleteContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                const i = state.contactsArray.findIndex(
                    contact => contact.id === action.payload.id
                );
                state.contactsArray.splice(i, 1);
            })
            .addCase(hendleDeleteContact.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const contactsReducer = contactsSlice.reducer;
