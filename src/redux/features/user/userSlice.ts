import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../../redux/store'

// Define a type for the slice state
interface UserState {
    username: string | undefined
    token: string | undefined
}

// Define the initial state using that type
const initialState: UserState = {
    username: undefined,
    token: undefined,
}

export const userSlice = createSlice({
    name: 'server',
    initialState,
    reducers: {
        storeToken: (
            state,
            action: PayloadAction<{ username: string; token: string }>,
        ) => {
            state.token = action.payload.token
            state.username = action.payload.username
        },
    },
})

export const { storeToken } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectToken = (state: RootState) => state.user

export default userSlice.reducer
