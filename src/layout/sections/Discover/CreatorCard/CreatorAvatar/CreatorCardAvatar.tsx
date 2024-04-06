import React from 'react';
import {S} from "./Styled_CreatorCardAvatar"
interface CreatorCardAvatarProps {
	src: string
}
export const CreatorCardAvatar = ({src} :CreatorCardAvatarProps) => {
	return (
		<S.CreatorCardAvatar src={src}/>


	);
};

