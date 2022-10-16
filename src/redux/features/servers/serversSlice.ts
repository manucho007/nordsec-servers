import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Servers } from '../../../models/Servers.models'
import { RootState } from '../../../redux/store'

// Define a type for the slice state
interface ServerState {
    servers: Servers[]
}

// Define the initial state using that type
const initialState: ServerState = {
    servers: [],
}

export const serverSlice = createSlice({
    name: 'servers',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        getServers: (state, action: PayloadAction<Servers[]>) => {
            state.servers = [...action.payload]
        },
    },
})

export const { getServers } = serverSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectServers = (state: RootState) => state.servers

export default serverSlice.reducer
