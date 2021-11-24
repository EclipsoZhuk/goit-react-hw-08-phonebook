import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operation';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [authOperations.register.fulfilled](state, { payload }) {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
            state.isLoading = false;
        },
        [authOperations.register.pending](state) {
            state.isLoading = true;
        },

        [authOperations.logIn.fulfilled](state, { payload }) {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
            state.isLoading = false;
        },
        [authOperations.logIn.pending](state) {
            state.isLoading = true;
        },

        [authOperations.logOut.fulfilled](state) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
            state.isLoading = false;
        },
        [authOperations.logOut.pending](state) {
            state.isLoading = true;
        },

        [authOperations.fetchCurrentUser.fulfilled](state, { payload }) {
            state.user = { ...payload };
            state.isLoggedIn = true;
            state.isLoading = false;
        },
        [authOperations.fetchCurrentUser.pending](state) {
            state.isLoading = true;
        },
        [authOperations.fetchCurrentUser.rejected](state, action) {
            state.error = action.error.message;
            state.isLoggedIn = false;
            state.isLoading = false;
        },
    },
});

export default authSlice.reducer;
