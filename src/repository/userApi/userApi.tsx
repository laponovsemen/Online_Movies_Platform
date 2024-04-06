
export type UserCredentials = {
	login: string
	email: string
}
export type loginResponse = {
	accessToken : string
}
export const userFakeApi = {
	async fetchByLoginOrEmail(userCredentials: UserCredentials): Promise<loginResponse>{
		if(userCredentials.email === "1111" && userCredentials.login === "1111"){
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
