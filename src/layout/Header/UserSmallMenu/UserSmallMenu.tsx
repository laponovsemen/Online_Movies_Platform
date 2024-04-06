import React from 'react';
import {S} from "./Styled_UserSmallMenu"
import {StyledFlexWrapper} from "../../../components/flexWrapper";
import {NotificationIcon} from "./NotificationIcon/NotificationIcon";
import Avatar from "./Avatar/Avatar";

const UserSmallMenu = () => {
	return (
		<S.UserSmallMenu>
			<StyledFlexWrapper
				align={"center"}
				gap={"10px"}
			>
				<NotificationIcon/>
				<Avatar/>
			</StyledFlexWrapper>
		</S.UserSmallMenu>
	);
};

export default UserSmallMenu;
