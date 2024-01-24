import authOperations from './auth-operations';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(authOperations.register.pending, state => {
        state.error = null;
      })

      .addCase(authOperations.register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.register.rejected, (state, action) => {
        state.error = action.payload;
      })

      .addCase(authOperations.logIn.pending, state => {
        state.error = null;
      })

      .addCase(authOperations.logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.logIn.rejected, (state, action) => {
        state.error = action.payload;
      })

      .addCase(authOperations.logOut.fulfilled, state => {
          state.user = { name: null, email: null };
          state.token = null;
          state.isLoggedIn = false;
          state.error = null;
      });
  },
});

export const authReducer = AuthSlice.reducer;
