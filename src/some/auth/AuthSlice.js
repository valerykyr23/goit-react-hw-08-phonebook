import register from './auth-operations'

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false
}


const AuthSlice = createSlice(
    {
        name: 'auth',
        initialState,
    //     extraReducers: builder => {
    //         builder
                
    //         .addCase(register.pending, (state, action) => {
       
    //         })
    //         .addCase(register.fulfilled, (state, action) => {
       
    //         })
    //         .addCase(register.rejected, (state, action) => {
       
    //   })
    //     }
    }
);

export const authReducer = AuthSlice.reducer;