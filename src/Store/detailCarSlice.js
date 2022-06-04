import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const getDetailCar = createAsyncThunk('detailCar/getDetailCar', async (id) => {
    try {
        const res = await axios.get(`https://rent-car-appx.herokuapp.com/admin/car/${id}`)
        return res.data
    } catch (error) {
        throw new Error(error)
    }
})

const initialState = {
    detailCar : [],
    loading   : false,
    error     : null,
}

export const detailCarSlice = createSlice({
    name            : 'detailCar',
    initialState,
    reducers        : {},
    extraReducers   : {
        [getDetailCar.pending]    : (state) => {
            state.loading   = true
        },
        [getDetailCar.fulfilled]  : (state, {payload}) => {
            state.loading   = false
            state.detailCar   = payload
        },
        [getDetailCar.rejected]   : (state, action) => {
            state.error     = action.error.message
        },
    }
})

export default detailCarSlice.reducer