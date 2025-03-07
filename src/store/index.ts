import { configureStore } from "@reduxjs/toolkit";
import ContactReducer from './reducers/contact'

const store = configureStore({
    reducer: {
        contact: ContactReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;

