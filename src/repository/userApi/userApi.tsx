import {axiosInstance} from "../axiosInstance";
import {AxiosResponse} from "axios"
import {authMeResponse, LoginResponse} from "../../models/response/AuthResponse";



export type UserCredentials = {
	loginOrEmail: string
	password: string
}


export const userApi = {
	async fetchByLoginOrEmail(userCredentials: UserCredentials): Promise<AxiosResponse<LoginResponse>>{
		console.log("userCreads in userApi",userCredentials)
		return await axiosInstance.post<LoginResponse>("authentication/login", {
			loginOrEmail: userCredentials.loginOrEmail,
			password: userCredentials.password,
		})

	},

	async registration(userCredentials: UserCredentials): Promise<AxiosResponse<LoginResponse>>{
		console.log("userCreads in userApi",userCredentials)
		return await axiosInstance.post<LoginResponse>("authentication/login", {
			loginOrEmail: userCredentials.loginOrEmail,
			password: userCredentials.password,
		})

	},

	async logout(): Promise<void>{
		return await axiosInstance.post("authentication/logout")

	},
	async authMe(): Promise<AxiosResponse<authMeResponse>>{
		return await axiosInstance.get<authMeResponse>("authentication/me")
	}
}
