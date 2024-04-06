import React from 'react';
import {Icon} from "../icon/Icon";
import {S} from "./Styled_MainLogo"
import {MainLogoText} from "./MainLogoText/MainLogoText";

export const MainLogo = () => {
	return (<S.MainLogo>
		<Icon
			width={"55"}
			height={'55'}
			viewBox={"0 0 60 60"}
			iconId={"mainLogo"}
			fill={"red"}
		/>

		<MainLogoText text={"watch"}/>
		</S.MainLogo>
	);
};

