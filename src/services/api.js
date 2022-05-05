import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'https://connections-api.herokuapp.com';

export const signupUser = createAsyncThunk('users/signupUser', async user => {
  try {
    const { data } = await axios.post(`${baseURL}/users/signup`, {
      name: user.name,
      email: user.email,
      password: user.password,
    });
    return data;
  } catch (error) {
    return error?.response;
  }
});

export const loginUser = createAsyncThunk('users/loginUser', async user => {
  try {
    const { data } = await axios.post(`${baseURL}/users/login`, {
      email: user.email,
      password: user.password,
    });
    return data;
  } catch (error) {
    return error?.response;
  }
});

export const logoutUser = createAsyncThunk('users/logoutUser', async token => {
  axios.defaults.headers.Authorization = `Bearer ${token}`;
  try {
    const { data } = await axios.post(`${baseURL}/users/logout`);
    return data;
  } catch (error) {
    return error?.response;
  }
});

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async token => {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
    try {
      const { data } = await axios.get(`${baseURL}/contacts`);
      return data;
    } catch (error) {
      return error?.response;
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ token, userData }) => {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
    try {
      const { data } = await axios.post(`${baseURL}/contacts`, {
        name: userData.name,
        number: userData.number,
      });
      return data;
    } catch (error) {
      return error?.response;
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async ({ token, id }) => {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
    await axios.delete(`${baseURL}/contacts/${id}`);
    try {
      const { data } = await axios.get(`${baseURL}/contacts`);
      return data;
    } catch (error) {
      return error?.response;
    }
  }
);
