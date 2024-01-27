import authOperations from './auth-operations';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
  isRefreshing: false,
  isLoading: false,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(authOperations.register.pending, state => {
        state.error = null;
        state.isLoading = true;
      })

      .addCase(authOperations.register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(authOperations.register.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })

      .addCase(authOperations.logIn.pending, state => {
        state.error = null;
        state.isLoading = true;
      })

      .addCase(authOperations.logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(authOperations.logIn.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })

      .addCase(authOperations.logOut.pending, state => {
        state.error = null;
        state.isLoading = true;
      })

      .addCase(authOperations.logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.error = null;
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(authOperations.logOut.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })

      .addCase(authOperations.refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(authOperations.refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(authOperations.refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = AuthSlice.reducer;
