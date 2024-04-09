import React from 'react';
import { Field, reduxForm } from 'redux-form'


const LoginForm = () => {
	return (
		<form onSubmit={(a) => {
			console.log(a)
			debugger
		}}>
			<label htmlFor="login1">login</label>
			<Field
				name="login1"
				component="input"
				type="text"
				placeholder={"login"}
			/>
			<label htmlFor="email1">email</label>
			<Field
				name="email1"
				component="input"
				type="text"
				placeholder={"email"}
			/>
			<button type="submit">Submit</button>
		</form>
	);
};

export const LoginFormRedux = reduxForm({
	form: "login"
})(LoginForm);
