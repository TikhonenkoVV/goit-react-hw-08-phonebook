import { createSlice } from '@reduxjs/toolkit';
import {
    hendleAddContact,
    hendleDeleteContact,
    hendleEditContact,
    hendleFetchContact,
    hendleFetchContactById,
} from './contactsOperations';

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
                state.contactsArray = action.payload;
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
                state.contact = action.payload;
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
            .addCase(hendleEditContact.pending, state => {
                state.isLoading = true;
            })
            .addCase(hendleEditContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                const newArray = [];
                state.contactsArray.map(el =>
                    el.id === action.payload.id
                        ? newArray.push(action.payload)
                        : newArray.push(el)
                );
                state.contactsArray = newArray;
                // const i = state.contactsArray.findIndex(
                //     contact => contact.id === action.payload.id
                // );
                // state.contactsArray[i].name = action.payload.name;
                // state.contactsArray[i].surname = action.payload.surname;
                // state.contactsArray[i].number = action.payload.number;
                // state.contactsArray[i].email = action.payload.email;
                // state.contactsArray[i].img = action.payload.img;
            })
            .addCase(hendleEditContact.rejected, (state, action) => {
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
