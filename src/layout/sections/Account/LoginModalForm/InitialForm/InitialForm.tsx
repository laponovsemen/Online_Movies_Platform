import React from 'react';
import {S} from "../Styled_LoginModalForm"
import {StyledFlexWrapper} from "../../../../../components/flexWrapper/flexWrapper";
import {Button} from "../../../../../components/Button/Button";
import {CloseButton} from "../CloseButton/CloseButton";
import {useDispatch} from "react-redux";
interface InitialFormProps{
	handleLogin: ()=> void
	handleRegistration: ()=> void
	handleClose: ()=> void
}
export const InitialForm = ({handleLogin, handleRegistration,handleClose}: InitialFormProps) => {

	return (
		<S.Form>
			<CloseButton handleClick={handleClose}/>
			<S.FormWrapper>


			<StyledFlexWrapper
				direction={"column"}
				align={"center"}
				justify={"space-evenly"}
				gap={"50px"}
			>
				<S.FormText>
					You are not logged in. please Sign In or register
				</S.FormText>
				<StyledFlexWrapper
					justify={"space-evenly"}
					gap={"100px"}
				>
					{[{text:"Login", handler: handleLogin},{text:"Registration", handler: handleRegistration},].map(item => (
						<Button
							text={item.text}
							height={"50px"}
							width={"100px"}
							onClick={item.handler}
						/>
					))
					}


				</StyledFlexWrapper>
			</StyledFlexWrapper>
			</S.FormWrapper>
		</S.Form>
	);
};

