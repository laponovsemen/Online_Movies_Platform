import React, {useState} from 'react';
import {S as SettingsS} from "../Styled_Settings"
import {S} from "./Styled_ThemeSwitch"
import {StyledFlexWrapper} from "../../../../components/flexWrapper";
export const ThemeSwitch = () => {
	const themeLS = localStorage.getItem("theme")
	const [theme, setTheme] = useState(themeLS ?? "dark")
	const handleSwitch = () => {
		setTheme(t => t === "dark" ? "light" : "dark")
		localStorage.setItem("theme", theme)
	}
	return (
		<SettingsS.SettingsItem>
			<StyledFlexWrapper
				align={"center"}
			>
				<S.ThemeSwitchText>
					configuration of languagdssssssssssssssssssse settings
				</S.ThemeSwitchText>

			</StyledFlexWrapper>

		</SettingsS.SettingsItem>
	);
};

