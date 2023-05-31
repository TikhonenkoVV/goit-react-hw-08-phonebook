import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const hendleFetchContact = createAsyncThunk(
    'contacts/fetchAll',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get('/contacts');
            return data;
        } catch (err) {
            rejectWithValue(err.message);
        }
    }
);

export const hendleAddContact = createAsyncThunk(
    'contacts/addContact',
    async (newContact, { rejectWithValue }) => {
        try {
            const response = await axios.post('/contacts', newContact);
            return response.data;
        } catch (err) {
            rejectWithValue(err.message);
        }
    }
);

export const hendleDeleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, { rejectWithValue }) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
        } catch (err) {
            rejectWithValue(err.message);
        }
    }
);
