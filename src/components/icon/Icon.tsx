import React from 'react';
import iconsSprite from "./../../assets/sprites/mainSprite.svg"

interface IconProps {
	iconId : string
	stroke? : string
	fill? : string
	width? : string
	height? : string
	viewBox? : string
}

export const Icon = ({iconId, stroke, fill, width, height, viewBox} : IconProps) => {
	return (
		<svg width={width || "50"}
		     height={height || "50"}
		     viewBox={viewBox || "0 0 50 50"}
		     stroke={stroke || "none"}
		     fill={fill}
		     xmlns="http://www.w3.org/2000/svg">
			<use xlinkHref={`${iconsSprite}#${iconId}`} />
		</svg>
	);
};

