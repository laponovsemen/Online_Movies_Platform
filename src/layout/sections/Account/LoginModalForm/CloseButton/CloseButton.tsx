import React from 'react';
import {S} from "./Styled_CloseButton"
import {Icon} from "../../../../../components/icon/Icon";

interface CloseButtonProps{
	handleClick : () => void
}
export const CloseButton = ({handleClick}: CloseButtonProps) => {
	return (
		<S.CloseButton
			onClick={handleClick}
		>
			<S.CloseButtonCross/>
		</S.CloseButton>
	);
};

