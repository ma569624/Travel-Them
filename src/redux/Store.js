import { configureStore } from '@reduxjs/toolkit'
import crudReducer from './CrudSlice'

export const store = configureStore({
    reducer: {
    crud: crudReducer,
  },
})