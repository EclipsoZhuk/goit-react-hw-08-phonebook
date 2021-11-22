import { configureStore } from '@reduxjs/toolkit';
import contactsSlice, { filterReducer } from './phoneBook/phonebook-reducer';
import { authReducer } from './auth';

const store = configureStore({
    reducer: {
        auth: authReducer,
        phoneBook: contactsSlice,
        filter: filterReducer,
    },
});

export default store;
