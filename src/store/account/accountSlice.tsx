import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "../store";
import {UserCredentials, userApi} from "../../repository/userApi/userApi";
import axios from "axios";
import {backEndBaseUrl} from "../../repository/axiosInstance";
import {LoginResponse} from "../../models/response/AuthResponse";

export const loginUserByLoginAndEmailThunk = createAsyncThunk(
	'account/loginUserByLoginAndEmailThunk',
	async (userCredentials: UserCredentials, thunkAPI) => {
		try {
			const response = await userApi.fetchByLoginOrEmail(userCredentials)
			const authMeResponse = await userApi.authMe()
			//localStorage.setItem("accessToken", response.data.accessToken)
			thunkAPI.dispatch(setIsLogged())
			//thunkAPI.dispatch(authMeThunk)
			return {accessToken: response.data.accessToken, user: authMeResponse }
		} catch (e) {
			console.log(e)
		}


	},
)
export const authMeThunk = createAsyncThunk(
	'account/authMeThunk',
	async () => {
		try {
			//const accessToken = localStorage.getItem("accessToken")
			const response = await userApi.authMe()
			console.log("response in authMeThunk ", response)
			return response.data
		} catch (e) {
			console.log(e)
		}


	},
)
export const registrationThunk = createAsyncThunk(
	'account/registrationThunk',
	async (userRegistrationCredentials: UserCredentials, thunkAPI) => {
		try {
			/*const response = await userApi.fetchByLoginOrEmail(userCredentials)
			const loginResponse = await userApi.authMe()
			localStorage.setItem("accessToken", response.data.accessToken)
			thunkAPI.dispatch(setIsLogged())
			thunkAPI.dispatch(setUser(loginResponse))
*/
			//return response.data
		} catch (e) {
			console.log(e)
		}


	},
)
export const logoutThunk = createAsyncThunk(
	'account/logoutThunk',
	async (_, thunkAPI) => {
		try {
			const response = await userApi.logout();
			localStorage.removeItem("accessToken")
			thunkAPI.dispatch(setIsNotLogged())
			thunkAPI.dispatch(clearUser())
		} catch (e) {
			console.log(e)
		}


	},
)

export const checkAuthThunk = createAsyncThunk(
	'account/checkAuthThunk',
	async (_, thunkAPI) => {
		try {
			const response = await axios.post<LoginResponse>(`${backEndBaseUrl}/authentication/refresh-token`,{

			},{withCredentials :true});
			localStorage.setItem("accessToken", response.data.accessToken)
			thunkAPI.dispatch(setIsLogged())
		} catch (e) {
			console.log(e)
		}


	},
)
// Define a type for the slice state
interface AccountState {
	name: string
	userId: string
	age: string
	sex: "man" | "woman" | undefined
	login: string
	email: string
	isLogged: boolean

	avatar: string
	loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}
// Define the initial state using that type
const initialState: AccountState = {
	age: "",
	email: "",
	login: "",
	sex: undefined,
	userId: "",
	name: "",
	isLogged: false,
	avatar: "",
	loading: 'idle'
}

export const accountSlice = createSlice({
	name: 'account',
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		setIsLogged: (state) => {
			state.isLogged = true

		},
		setIsNotLogged: (state) => {
			state.isLogged = false
		},
		setUser: (state, {payload, type}) => {
			state.userId = payload.userId
			state.name = payload.name
			state.age = payload.age
			state.sex = payload.sex
			state.login = payload.login
			state.email = payload.email
		},
		clearUser: (state) => {
			state.userId = ""
			state.name = ""
			state.age = ""
			state.sex = undefined
			state.login = ""
			state.email = ""
		},


		// Use the PayloadAction type to declare the contents of `action.payload`
	},
	extraReducers: (builder) => {
		builder
			.addCase(loginUserByLoginAndEmailThunk.fulfilled, (state, action) => {
				//state.isLogged = action.payload.accessToken
				//state.
				console.log(action)
				localStorage.setItem("accessToken", action?.payload?.accessToken || "no token")

			})
			.addCase(authMeThunk.fulfilled, (state, action) => {
				//state.isLogged = action.payload.accessToken
				//state.
				console.log(action, " action in authMeThunk.fulfilled")
				//
			})
	}
})


export const {setIsLogged, setIsNotLogged, setUser, clearUser} = accountSlice.actions

// Other code such as selectors can use the imported `RootState` type
//export const selectCount = (state: RootState) => state.counter.value

export default accountSlice.reducer

const isLoggedSelector = (state: RootState) => state.account.isLogged

export const selectors = {
	isLoggedSelector
}
