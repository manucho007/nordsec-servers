import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Servers } from '../../../models/Servers.models'
import { RootState } from '../../../redux/store'
import { getServers } from '../../../services/servers.service'

// Define a type for the slice state
interface ServerState {
    servers: Servers[]
    loading: boolean
    error: string | null | undefined
}

// Define the initial state using that type
const initialState: ServerState = {
    servers: [],
    loading: false,
    error: null,
}

export const fetchServers = createAsyncThunk(
    'servers/fetchServers',
    async () => {
        try {
            const servers = await getServers()
            console.log(servers, 'THUNK')
            return servers
        } catch (error: any) {
            throw Error(error.message)
        }
    },
)

export const serverSlice = createSlice({
    name: 'servers',
    initialState,
    reducers: {
        addServers: (state, action: PayloadAction<Servers[]>) => {
            state.servers = [...action.payload]
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchServers.pending, state => {
            state.loading = true
            state.error = null
        }),
            builder.addCase(
                fetchServers.fulfilled,
                (state, action: PayloadAction<Servers[]>) => {
                    state.loading = false
                    state.error = null
                    state.servers = [...action.payload]
                },
            ),
            builder.addCase(fetchServers.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    },
})

export const { addServers } = serverSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectServers = (state: RootState) => state.servers

export default serverSlice.reducer
