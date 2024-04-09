import {axiosInstance} from "../axiosInstance";
import {AxiosResponse} from "axios"
import {LoginResponse} from "../../models/response/AuthResponse";


export type UserCredentials = {
	loginOrEmail: string
	password: string
}

export const userFakeApi = {
	async fetchByLoginOrEmail(userCredentials: UserCredentials): Promise<LoginResponse>{
		if(userCredentials.loginOrEmail === "1111" && userCredentials.password === "1111"){
			return new Promise((resolve) => {
				setTimeout(() => {
					resolve({accessToken: "asasa"})
				}, 300)
			})
		} else {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					reject()
				}, 300)
			})
		}

	}
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
}
