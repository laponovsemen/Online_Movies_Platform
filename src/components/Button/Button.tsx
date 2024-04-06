import React from 'react';
import {S, StyledButtonProps} from "./Styled_Button"

interface ButtonProps extends StyledButtonProps{
	text: string
	onClick: ()=> void
}
export const Button = ({text, color, backgroundColor, colorOnHover, width, height, onClick} : ButtonProps) => {
	return (
		<S.Button
			width={width}
			color={color}
			backgroundColor={backgroundColor}
			colorOnHover={colorOnHover}
			height={height}
			onClick={onClick}
		>
			{text}
		</S.Button>
	);
};
