import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';


axios.defaults.baseURL = "https://connections-api.herokuapp.com";


const token = {
    set(token) {
axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    }
}

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
        const { data } = await axios.get('/contacts');

 token.set(data.token);

        Notiflix.Notify.success(
          `We found your contacts`
        );
      return data;
    } catch (error) {
        Notiflix.Notify.failure(
          `We could not find your contacts...`
        );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const {
        contacts: { items },
      } = thunkAPI.getState();

      if (items.find(item => item.name.toLowerCase() === newContact.name.toLowerCase())) {
        Notiflix.Notify.failure(
          `Contact with name '${newContact.name}' is already in contacts.`
        );
        return thunkAPI.rejectWithValue('Contact already exist');
      } else {
          const { data } = await axios.post('/contacts', newContact);

           token.set(data.token);

        Notiflix.Notify.success(
          `Contact with name '${newContact.name}' has been added succesfully to contacts list.`
        );

        return data;
      }
    } catch (error) {
        Notiflix.Notify.failure(
          `New contact cannot be added`
        );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactID, thunkAPI) => {
    try {
        const { data } = await axios.delete(`/contacts/${contactID}`);

 token.set(data.token);

        Notiflix.Notify.success(
          `Contact was successfully deleted`
        );
      return data;
    } catch (error) {
        Notiflix.Notify.failure(
          `We could not delete the selcted contact`
        );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);