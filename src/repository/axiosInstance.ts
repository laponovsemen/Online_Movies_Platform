import axios from "axios";

const backEndBaseUrl = "https://project-movie-gamma.vercel.app"
const anotherUrl = "https://google.com"
export const axiosInstance = axios.create({
	baseURL: backEndBaseUrl,
	withCredentials: true, // чтобы куки крепились автоматически к каждому запросу

	/*timeout: 5000,
	headers:{
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
	}*/
}, );

axiosInstance.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`
	return config
})

