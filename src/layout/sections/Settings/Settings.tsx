import React from 'react';
import {S} from "./Styled_Settings"
import { S as GlobalS} from "./../../../styles/Styled_Section"
import {ThemeSwitch} from "./ThemeSwitch/ThemeSwitch";
import {LanguageSwitch} from "./LanguageSwitch/LanguageSwitch";
import {StyledFlexWrapper} from "../../../components/flexWrapper/flexWrapper";
export const Settings = () => {
	return (
		<GlobalS.Section>
			<StyledFlexWrapper
				direction={"column"}
				gap={"15px"}
			>
				<LanguageSwitch/>
				<ThemeSwitch />
			</StyledFlexWrapper>

		</GlobalS.Section>
	);
};

