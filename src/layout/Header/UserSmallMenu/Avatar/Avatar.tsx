import React from 'react';
import {S} from "./Styled_Avatar"
import mainImage from "./../../../../assets/images/userMainImage.jpg"

interface AvatarProps{
	width? :string
	height? :string
}
const Avatar = ({width, height}: AvatarProps) => {
	return (
		<S.Avatar
			width={width}
			height={height}
			src={mainImage}
		/>


	);
};

export default Avatar;
