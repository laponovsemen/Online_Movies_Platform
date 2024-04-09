import React from 'react';
import {S} from "./Header_Styles"
import {StyledFlexWrapper} from "../../components/flexWrapper/flexWrapper";
import {MainLogo} from "../../components/MainLogo/MainLogo";
import FilmCategories from "./FilmCategories/FilmCategories";
import SearchInput from "./SearchInput/SearchInput";
import UserSmallMenu from "./UserSmallMenu/UserSmallMenu";

export const Header = () => {
	return (
		<S.Header>
			<StyledFlexWrapper gap={"104px"}
			align={"center"}>
				<MainLogo/>

				<FilmCategories/>

				<SearchInput/>

				<UserSmallMenu/>

			</StyledFlexWrapper>

		</S.Header>
	);
};

