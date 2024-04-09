import React, {useState} from 'react';
import {LoginModalForm} from "./LoginModalForm/LoginModalForm";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectors} from "../../../store/account/accountSlice";
import {AccountPage} from "./AccountPage";

export const Account = () => {
	const isLogged = useSelector(selectors.isLoggedSelector)

	const [loginFormDisplay, setLoginFormDisplay] = useState(isLogged)
	const navigate = useNavigate()
	const handleClose = () => {
		setLoginFormDisplay(true)
		navigate(-1)
	}
	return (isLogged ?
			<AccountPage/> :
			<LoginModalForm handleClose={handleClose}/>
	);
};

