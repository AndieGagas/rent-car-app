import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postUserRegister = createAsyncThunk('userRegister/postUserRegister', async(payload) => {
    try {
        const res = await axios.post('http://notflixtv.herokuapp.com/api/v1/users', payload)
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

export const userRegisterSlice = createSlice({
    name            : 'userRegister',
    initialState,
    reducers        : {},
    extraReducers   : {
        [postUserRegister.pending]  : (state) => {
            state.loading   = true
        },
        [postUserRegister.fulfilled]  : (state, {payload}) => {
            state.loading   = false
            state.user      = payload
            localStorage.setItem('token', JSON.stringify(payload.token))
        },
        [postUserRegister.rejected]   : (state, action) => {
            state.error     = action.error.message
        },
    }
})

export default userRegisterSlice.reducer