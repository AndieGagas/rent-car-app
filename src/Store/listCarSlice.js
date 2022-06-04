import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const getListCar = createAsyncThunk('listCar/getListCar', async () => {
    try {
        const res = await axios.get('https://rent-car-appx.herokuapp.com/admin/car')
        return res.data
    } catch (error) {
        throw new Error(error)
    }
})

const initialState = {
    listCar : [],
    loading : false,
    error   : null,

    getPassenger        : '10 orang',
    getTransmissionType : 'Manual',
    getProductionYear   : 'Tahun 2020'
}

export const listCarSlice = createSlice({
    name            : 'listCar',
    initialState,
    reducers        : {},
    extraReducers   : {
        [getListCar.pending]    : (state) => {
            state.loading   = true
        },
        [getListCar.fulfilled]  : (state, {payload}) => {
            state.loading   = false
            state.listCar   = payload
        },
        [getListCar.rejected]   : (state, action) => {
            state.error     = action.error.message
        },
    }
})

export default listCarSlice.reducer