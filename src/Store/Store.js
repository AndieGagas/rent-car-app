import { configureStore } from '@reduxjs/toolkit'
import listCarSlice from './listCarSlice'
import detailCarSlice from './detailCarSlice'
import userRegisterSlice from './userRegisterSlice'
import userLoginSlice from './userLoginSlice'

export const store = configureStore({
    reducer: {
        listCar         : listCarSlice,
        detailCar       : detailCarSlice,
        userRegister    : userRegisterSlice,
        userLogin       : userLoginSlice
    },
})