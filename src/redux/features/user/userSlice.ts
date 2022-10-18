import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../../redux/store'
import { login } from '../../../services/auth.service'

// Define a type for the slice state
interface UserState {
    username: string | undefined
    token: string | undefined
    error: undefined | string
}

// checks if the token rxists in localstorage
const tokenFromStorage = localStorage.getItem('token')
    ? JSON.parse(localStorage.getItem('token') as string)
    : undefined

// Define the initial state using that type
const initialState: UserState = {
    username: undefined,
    token: tokenFromStorage,
    error: undefined,
}

export const logIn = createAsyncThunk(
    'auth/login',
    async (
        { username, password }: { username: string; password: string },
        { rejectWithValue },
    ) => {
        try {
            const token = await login(username, password)
            if (!token) throw new Error()
            return { token, username }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            if (!err.response) {
                throw err
            }

            return rejectWithValue(err.response.data)
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
            state.error = undefined
            state.token = action.payload?.token.token
            state.username = action.payload?.username
        }),
            builder.addCase(logIn.rejected, state => {
                state.error =
                    'The username or password entered does not match any account, please verify your data and try again '
            })
    },
})

export const { storeToken, deleteToken } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user

export default userSlice.reducer
