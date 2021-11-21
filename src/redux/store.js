import { configureStore } from '@reduxjs/toolkit';
import contactsSlice, { filterReducer } from './phoneBook/phonebook-reducer';

const store = configureStore({
    reducer: {
        phoneBook: contactsSlice,
        filter: filterReducer,
    },
});

export default store;
