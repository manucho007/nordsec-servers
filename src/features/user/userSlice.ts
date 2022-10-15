import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// Define a type for the slice state
interface UserState {
    token: string | undefined
}

// Define the initial state using that type
const initialState: UserState = {
    token: undefined,
}

export const userSlice = createSlice({
    name: 'server',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        storeToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload
        },
    },
})

export const { storeToken } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.servers

export default userSlice.reducer
