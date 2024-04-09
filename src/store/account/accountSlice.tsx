import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "../store";
import {userFakeApi, UserCredentials} from "../../repository/userApi/userApi";

const loginUserByLoginAndEmail = createAsyncThunk(
	'account/fetchUserByLoginAndEmail',
	async (userCredentials : UserCredentials, thunkAPI) => {
		const response = {data: await userFakeApi.fetchByLoginOrEmail(userCredentials)}
		return response.data
	},
)
// Define a type for the slice state
interface AccountState {
	name: string
	surname: string
	isLogged: boolean
	accessToken: string
	refreshToken: string
	avatar: string
	loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

// Define the initial state using that type
const initialState: AccountState = {
	name: "",
	surname: "",
	isLogged: false,
	accessToken: "",
	refreshToken: "",
	avatar: "",
	loading: 'idle',
}

export const accountSlice = createSlice({
	name: 'account',
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		login: (state) => {
			state.isLogged = true

		},
		logout: (state) => {
			state.isLogged = false
		},
		// Use the PayloadAction type to declare the contents of `action.payload`
	},
	extraReducers: (builder) => {
		builder.addCase(loginUserByLoginAndEmail.fulfilled, (state, action)=> {
			state.accessToken = action.payload.accessToken
		})
	}
})

export const { login, logout, } = accountSlice.actions

// Other code such as selectors can use the imported `RootState` type
//export const selectCount = (state: RootState) => state.counter.value

export default accountSlice.reducer

const isLoggedSelector = (state: RootState) => state.account.isLogged

export const selectors = {
	isLoggedSelector
}
