import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');

      Notiflix.Notify.success(`We found your contacts`);
      return data;
    } catch (error) {
      Notiflix.Notify.failure(`We could not find your contacts...`);
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

      if (
        items.find(
          item => item.name.toLowerCase() === newContact.name.toLowerCase()
        )
      ) {
        Notiflix.Notify.failure(
          `Contact with name '${newContact.name}' is already in contacts.`
        );
        return thunkAPI.rejectWithValue('Contact already exist');
      } else {
        const { data } = await axios.post('/contacts', newContact);

        Notiflix.Notify.success(
          `Contact with name '${newContact.name}' has been added succesfully to contacts list.`
        );

        return data;
      }
    } catch (error) {
      Notiflix.Notify.failure(`New contact cannot be added`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactID, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactID}`);

      Notiflix.Notify.success(`Contact was successfully deleted`);
      return data;
    } catch (error) {
      Notiflix.Notify.failure(`The selected contact cannot be delted`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
