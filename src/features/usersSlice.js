import { createSlice } from '@reduxjs/toolkit';
import { signupUser, loginUser, logoutUser } from 'services/api';

const initialState = {
  token: null,
  loading: false,
  userData: {},
  isLoggedIn: false,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [signupUser.pending]: state => {
      state.loading = true;
    },
    [signupUser.fulfilled]: (state, action) => {
      const { token, user } = action.payload;
      state.token = token;
      state.userData = user;
      state.isLoggedIn = true;
      state.loading = false;
    },
    [loginUser.pending]: state => {
      state.loading = true;
    },
    [loginUser.fulfilled]: (state, action) => {
      const { token, user } = action.payload;
      state.token = token;
      state.userData = user;
      state.isLoggedIn = true;
      state.loading = false;
    },
    [logoutUser.fulfilled]: state => {
      state.isLoggedIn = false;
      state.token = null;
      state.userData = {};
    },
  },
});



export default usersSlice.reducer;