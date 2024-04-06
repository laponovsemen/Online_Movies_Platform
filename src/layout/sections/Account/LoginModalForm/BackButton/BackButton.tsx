import React from 'react';
import {S} from "./Styled_BackButton"
import {Icon} from "../../../../../components/icon/Icon";

interface BackButtonProps{
	handleClick : () => void
}
export const BackButton = ({handleClick}: BackButtonProps) => {
	return (
		<S.BackButton
			onClick={handleClick}
		>
			<Icon
				iconId={"backArrow"}
				fill={"white"}

			/>
		</S.BackButton>
	);
};

