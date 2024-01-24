import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Notiflix from "notiflix";


axios.defaults.baseURL = "https://connections-api.herokuapp.com";

   const register = createAsyncThunk(
    "auth/register",
    async (credentials, thunkAPI) => {
        try {
            const { data } = await axios.post("/users/signup", credentials);
            Notiflix.Notify.success(
          `New user was successfully created !`
        );
            return data;
        }
        catch (error) {
            Notiflix.Notify.failure(
                `User was not created due to error`
            );
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


const logIn = createAsyncThunk(
    "auth/login",
    async (credentials, thunkAPI) => {
        try {
            const { data } = await axios.post("/users/login", credentials);
            Notiflix.Notify.success(
          `You successfully logged in !`
        );
            return data;
        }
        catch (error) {
            Notiflix.Notify.failure(
                `User was not logged in`
            );
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


const logOut = createAsyncThunk(
    'auth/logout', 
    async (thunkAPI) => {
    
        try {
            const { data } = await axios.post("/users/logout");
            Notiflix.Notify.success(
          `You successfully logged out !`
        );
            return data;
     }
        catch (error) {
            Notiflix.Notify.failure(
                `User could not be logged out`
            );
        return thunkAPI.rejectWithValue(error.message);
    }
}
    
)


const authOperations = {
    register,
    logIn,
    logOut
};

export default authOperations;