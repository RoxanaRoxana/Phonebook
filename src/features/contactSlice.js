import {  createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from 'services/api';


const initialState = {
  contactsList: [],
  status: null,
  filter: '',
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filterContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.status = 'success';
      state.contactList = action.payload;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.status = 'failed';
    },
    [addContact.fulfilled]: (state, action) => {
      state.contactsList.push(action.payload);
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.contactsList = action.payload;
    },
  },
});

export const { filterContacts } =
  contactSlice.actions;
export const selectContacts = state => state.contacts.contactsList;
export const selectFilter = state => state.contacts.filter;

export default contactSlice.reducer;
