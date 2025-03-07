import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Contact = {
    name: string;
    phone: number;
    city: string;
    id: number
};

const initialState: Contact[] = [

    {
        name: 'Felipe',
        phone: 22992122757,
        city: 'Rio de Janeiro',
        id: 1
    },

    {
        name: 'Marilene Bernardo',
        phone: 31973321315,
        city: 'Belo Horizonte',
        id: 2

    },

    {
        name: 'Rafael Janovicci',
        phone: 22999999999,
        city: 'Rio de Janeiro',
        id: 3

    },

    {
        name: 'Daniel Janovicci',
        phone: 22888888888,
        city: 'Rio de Janeiro',
        id: 4

    },

    {
        name: 'Daiane Janovicci',
        phone: 22777777777,
        city: 'Rio de Janeiro',
        id: 5

    },

]

const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        edit: (state, action: PayloadAction<Contact>) => {
            const indexForContact = state.findIndex((c) => c.id === action.payload.id);
            if (indexForContact >= 0) {
              state[indexForContact] = action.payload;
            }
        }
        
    }

})

export const { edit } = contactSlice.actions;
export default contactSlice.reducer;

