import React, {useState} from 'react';
import {S} from "./Styled_LoginModalForm"
import {InitialForm} from "./InitialForm/InitialForm";
import {LoginForm, } from "./LoginForm/loginForm";
import {RegistrationForm} from "./RegistrationForm/RegistrationForm";
import { useNavigate} from "react-router-dom";
interface LoginModalFormProps {
	handleClose: () => void
}
export const LoginModalForm = ({handleClose}: LoginModalFormProps) => {
	const [initialFormDisplay, setInitialFormDisplay] = useState(true)
	const [loginFormDisplay, setLoginFormDisplay] = useState(false)
	const [registrationFormDisplay, setRegistrationFormDisplay] = useState(false)


	const handleLoginBtn = () => {
		setLoginFormDisplay(true)
		setRegistrationFormDisplay(false)
		setInitialFormDisplay(false)
	}
	const handleRegistrationBtn = () => {
		setLoginFormDisplay(false)
		setRegistrationFormDisplay(true)
		setInitialFormDisplay(false)
	}
	const handleBackBtn = () => {


		setLoginFormDisplay(false)
		setRegistrationFormDisplay(false)
		setInitialFormDisplay(true)

	}

	return (
		<S.LoginModalBackground>
			<S.LoginModal>
				{initialFormDisplay && <InitialForm
					handleLogin={handleLoginBtn}
					handleRegistration={handleRegistrationBtn}
					handleClose={handleClose}
				/>}
				{loginFormDisplay && <LoginForm
					handleBack={handleBackBtn}
                    handleClose={handleClose}
				/>}
				{registrationFormDisplay && <RegistrationForm
					handleBack={handleBackBtn}
                    handleClose={handleClose}
				/>}
			</S.LoginModal>
		</S.LoginModalBackground>
	);
};

