import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

Notiflix.Notify.init({
  distance: '100px',
});

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      Notiflix.Notify.success(`New user was successfully created !`);
      token.set(data.token);
      return data;
    } catch (error) {
      Notiflix.Notify.failure(`User was not created due to error`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    Notiflix.Notify.success(`You successfully logged in !`);
    token.set(data.token);
    return data;
  } catch (error) {
    Notiflix.Notify.failure(`User was not logged in`);
    return thunkAPI.rejectWithValue(error.message);
  }
});

const logOut = createAsyncThunk(
    'auth/logout',
    async thunkAPI => {
  try {
    await axios.post('/users/logout');
    Notiflix.Notify.success(`You successfully logged out !`);
    token.unset();
  } catch (error) {
    Notiflix.Notify.failure(`User could not be logged out`);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async thunkAPI => {
    try {
      const { data } = await axios.get('/users/current');

      const { token: personalToken } = thunkAPI.getState().auth;
      personalToken && token.set(personalToken);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const authOperations = {
  register,
  logIn,
  logOut,
  refreshUser,
};

export default authOperations;
