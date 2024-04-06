import React from 'react';
import {S} from "../Styled_LoginModalForm"
import {StyledFlexWrapper} from "../../../../../components/flexWrapper";
import {Button} from "../../../../../components/Button/Button";
import {BackButton} from "../BackButton/BackButton";
import {CloseButton} from "../CloseButton/CloseButton";

interface LoginFormProps{
	handleBack: () => void
	handleClose: () => void
}

export const LoginForm = ({handleBack, handleClose} : LoginFormProps) => {
	return (
		<S.Form>
			<CloseButton handleClick={handleClose}/>
			<BackButton handleClick={handleBack}/>
			<S.FormWrapper>
				<StyledFlexWrapper
					direction={"column"}
					align={"center"}
					justify={"space-evenly"}
					gap={"50px"}
				>
					<S.FormText>
						login
					</S.FormText>
					<StyledFlexWrapper
						justify={"space-evenly"}
						gap={"100px"}
					>
						here must be login form


					</StyledFlexWrapper>
				</StyledFlexWrapper>
			</S.FormWrapper>
		</S.Form>
	);
};
