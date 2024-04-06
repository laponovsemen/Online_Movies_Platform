import React, {useState} from 'react';
import {LoginModalForm} from "./LoginModalForm/LoginModalForm";
import {useNavigate} from "react-router-dom";
const isLogged = false
export const Account = () => {
	const [loginFormDisplay, setLoginFormDisplay] = useState(isLogged)
	const navigate = useNavigate()
	const handleClose = () => {
		setLoginFormDisplay(true)
		navigate(-1)
	}
	return (loginFormDisplay ?
		<div>

		</div> : <LoginModalForm handleClose={handleClose}/>
	);
};

