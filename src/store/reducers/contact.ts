import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Contact = {
  name: string;
  phone: string;
  city: string;
  id: number;
};

const initialState: Contact[] = [
  {
    name: "Felipe",
    phone: '22992122757',
    city: "Rio de Janeiro",
    id: Math.random(),
  },

  {
    name: "Marilene Bernardo",
    phone: '31973321315',
    city: "Belo Horizonte",
    id: Math.random(),
  },

  {
    name: "Rafael Janovicci",
    phone: '22999999999',
    city: "Rio de Janeiro",
    id: Math.random(),
  },

  {
    name: "Daniel Janovicci",
    phone: '22888888888',
    city: "Rio de Janeiro",
    id: Math.random(),
  },

  {
    name: "Daiane Janovicci",
    phone: '22777777777',
    city: "Rio de Janeiro",
    id: Math.random(),
  },
];

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    edit: (state, action: PayloadAction<Contact>) => {
      const indexForContact = state.findIndex(
        (c) => c.id === action.payload.id,
      );
      if (indexForContact >= 0) {
        state[indexForContact] = action.payload;
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      return state.filter((contact) => contact.id !== action.payload);
    },
    register: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      const existContact = state.find(
        (contact) =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase(),
      );
      if (existContact) {
        alert("Já existe uma tarefa com esse nome.");
      } else {
        const lastContact = state[state.length -1]
        const newTask = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1
        } 
        state.push(newTask);
      }
    }
  },
});

export const { edit, remove, register } = contactSlice.actions;
export default contactSlice.reducer;
