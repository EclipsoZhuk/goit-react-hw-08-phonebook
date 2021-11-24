import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

const register = createAsyncThunk(
    'auth/register',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/users/signup', credentials);
            token.set(data.token);
            return data;
        } catch (error) {
            rejectWithValue(error.message);
        }
    },
);

const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/users/login', credentials);
            token.set(data.token);
            return data;
        } catch (error) {
            rejectWithValue(error.message);
        }
    },
);

const logOut = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            await axios.post('/users/logout');
            token.unset();
        } catch (error) {
            rejectWithValue(error.message);
        }
    },
);

const fetchCurrentUser = createAsyncThunk(
    'auth/refresh',
    async (_, { rejectWithValue, getState }) => {
        const state = getState();
        const persistToken = state.auth.token;

        if (persistToken === null) {
            return rejectWithValue();
        }

        token.set(persistToken);
        try {
            const { data } = await axios.get('/users/current');
            return data;
        } catch (error) {
            rejectWithValue(error.message);
        }
    },
);

const operations = {
    register,
    logIn,
    logOut,
    fetchCurrentUser,
};

export default operations;
