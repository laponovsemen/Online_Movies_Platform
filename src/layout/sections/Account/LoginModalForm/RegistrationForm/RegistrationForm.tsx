import React from 'react';
import {S} from "../Styled_LoginModalForm"
import {StyledFlexWrapper} from "../../../../../components/flexWrapper/flexWrapper";
import {Button} from "../../../../../components/Button/Button";
import {BackButton} from "../BackButton/BackButton";
import {CloseButton} from "../CloseButton/CloseButton";

interface RegistrationFormProps{
	handleBack: () => void
	handleClose: () => void
}

export const RegistrationForm = ({handleBack,handleClose}: RegistrationFormProps) => {
	return (
		<S.Form>
			<BackButton handleClick={handleBack}/>
			<CloseButton handleClick={handleClose}/>
			<S.FormWrapper>
				<StyledFlexWrapper
					direction={"column"}
					align={"center"}
					justify={"space-evenly"}
					gap={"50px"}
				>
					<S.FormText>
						registration
					</S.FormText>
					<StyledFlexWrapper
						justify={"space-evenly"}
						gap={"100px"}
					>
						here must be registration form


					</StyledFlexWrapper>
				</StyledFlexWrapper>
			</S.FormWrapper>
		</S.Form>
	);
};
