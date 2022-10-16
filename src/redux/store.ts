import { configureStore } from '@reduxjs/toolkit'
import serversReducer from './features/servers/serversSlice'
import userReducer from './features/user/userSlice'
export const store = configureStore({
    reducer: {
        servers: serversReducer,
        user: userReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
