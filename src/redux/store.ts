import { configureStore, combineReducers } from '@reduxjs/toolkit'
import serversReducer from './features/servers/serversSlice'
import userReducer from './features/user/userSlice'

const rootReducer = { servers: serversReducer, user: userReducer }

export const store = configureStore({
    reducer: rootReducer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
