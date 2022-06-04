import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postUserLogin = createAsyncThunk('userLogin/postUserLogin', async(payload) => {
    try {
        const res = await axios.post('http://notflixtv.herokuapp.com/api/v1/users/login', payload)
        console.log(res.data.data)
        return res.data.data
    } catch (error) {
        throw new Error(error)
    }
})

const initialState = {
    user    : null,
    loading : false,
    error   : null
}

export const userLoginSlice = createSlice({
    name            : 'userLogin',
    initialState,
    reducers        : {},
    extraReducers   : {
        [postUserLogin.pending]  : (state) => {
            state.loading   = true
        },
        [postUserLogin.fulfilled]  : (state, {payload}) => {
            state.loading   = false
            state.user      = payload
            localStorage.setItem('token', JSON.stringify(payload.token))
        },
        [postUserLogin.rejected]   : (state, action) => {
            state.error     = action.error.message
        },
    }
})

export default userLoginSlice.reducer