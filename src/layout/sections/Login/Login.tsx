import React from 'react';
import {S} from "../../../styles/Styled_Section"
import { useForm } from 'react-hook-form';
import {userApi} from "../../../repository/userApi/userApi";
import {useDispatch} from "react-redux";
import {loginUserByLoginAndEmailThunk} from "../../../store/account/accountSlice";
import {useNavigate} from "react-router-dom";
export const Login = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	//console.log("errors", errors)
	const onSubmit = async (data: any) => {
		console.log(data);
		console.log("errors", errors)
		//const response = await userApi.fetchByLoginOrEmail(data)
		dispatch(loginUserByLoginAndEmailThunk(data))
		//navigate(-1)
	};

	return (
		<S.Section>
			Here will be login form
			<form onSubmit={handleSubmit(onSubmit)}>
				<div >
					<label>{`Тут будет ваш O-> loginOrEmail O->`}</label>
					<input
						type="text"
						{...register("loginOrEmail", {
							required: true,
							/*pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/*/
						})}

					/>
				</div>
				<div >
					<label>{`Тут будет ваш O-> Password O->`}</label>
					<input type="password"  {...register("password", {
						required: true,

					})} />
					{errors.email && errors.email.type === "required" && (
						<p className="errorMsg">Email is required.</p>
					)}
					{/*{errors.email && errors.email.type === "pattern" && (
						<p className="errorMsg">Email is not valid.</p>
					)}*/}
				</div>
				<div >
					<label></label>
					<button type="submit">Login</button>
				</div>
			</form>
		</S.Section>
	);
};

