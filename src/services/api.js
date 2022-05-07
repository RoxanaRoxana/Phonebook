import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const baseURL = 'https://connections-api.herokuapp.com';

export const signupUser = createAsyncThunk('users/signupUser', async user => {
  try {
    const { data } = await axios.post(`${baseURL}/users/signup`, {
      name: user.name,
      email: user.email,
      password: user.password,
    });
     toast.info('Register successfully', {
       position: 'top-center',
       autoClose: 2000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
     });
    return data;
  } catch (error) {
    toast.error("User already exists")
    return error?.response;
  }
});

export const loginUser = createAsyncThunk('users/loginUser', async user => {
  try {
    const { data } = await axios.post(`${baseURL}/users/login`, {
      email: user.email,
      password: user.password,
    });
    toast.info('Logged in', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
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
    toast.info('Logged out', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
       toast.info('New contact added', {
         position: 'top-center',
         autoClose: 2000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
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
       toast.info('Contact deleted', {
         position: 'top-center',
         autoClose: 2000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
       });
      return data;
    } catch (error) {
      return error?.response;
    }
  }
);
