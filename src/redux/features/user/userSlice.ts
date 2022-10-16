import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../../redux/store'
import { login } from '../../../services/auth.service'

// Define a type for the slice state
interface UserState {
    username: string | undefined
    token: string | undefined
    error: null | string | undefined
}

// checks if the token rxists in localstorage
const tokenFromStorage = localStorage.getItem('token')
    ? JSON.parse(localStorage.getItem('token') as string)
    : undefined

// Define the initial state using that type
const initialState: UserState = {
    username: undefined,
    token: tokenFromStorage,
    error: null,
}

export const logIn = createAsyncThunk(
    'auth/login',
    async ({ username, password }: { username: string; password: string }) => {
        try {
            const token = await login(username, password)
            console.log(token, 'LOGIN')

            return token
        } catch (error: any) {
            throw Error(error.message)
        }
    },
)

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
        deleteToken: state => {
            state.token = undefined
        },
    },
    extraReducers: builder => {
        builder.addCase(logIn.fulfilled, (state, action) => {
            state.error = null
            state.token = action.payload.token
        }),
            builder.addCase(logIn.rejected, (state, action) => {
                state.token = undefined
                state.error = action.error.message
            })
    },
})

export const { storeToken, deleteToken } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectToken = (state: RootState) => state.user

export default userSlice.reducer
