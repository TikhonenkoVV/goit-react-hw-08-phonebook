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

export const hendleFetchContactById = createAsyncThunk(
    'contacts/getContact',
    async (contactId, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`/contacts`);
            const res = data.filter(el => el.id === contactId);
            return res;
        } catch (err) {
            rejectWithValue(err.message);
        }
    }
);

// export const hendleFetchContactById = createAsyncThunk(
//     'contacts/fetchContact',
//     async (contactId, { rejectWithValue }) => {
//         try {
//             const response = await axios.get(`/contacts/${contactId}`);
//             return response.data;
//         } catch (err) {
//             rejectWithValue(err.message);
//         }
//     }
// );

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

export const hendleEditContact = createAsyncThunk(
    'contacts/editContact',
    async (arg, { rejectWithValue }) => {
        const { contactId, values } = arg;
        try {
            const response = await axios.patch(
                `/contacts/${contactId}`,
                values
            );
            return response.data;
        } catch (err) {
            rejectWithValue(err.message);
        }
    }
);
