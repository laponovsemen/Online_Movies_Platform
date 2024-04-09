import React from 'react';
import {S} from "./Styled_SideBar"
import {StyledFlexWrapper} from "../../components/flexWrapper/flexWrapper";
import {SideBarMenuSubList} from "../../localMarkupDb/localMarkupDb";
import {SideBarSubList} from "./SideBarSubList/SideBarSubList";

interface SideBarProps {
	sideBarMenuList: SideBarMenuSubList[]
}

const SideBar = ({sideBarMenuList}: SideBarProps) => {
	return (
		<S.SideBar>
			<StyledFlexWrapper
				direction={"column"}
				gap={"60px"}
			>
				{sideBarMenuList.map(item => (
					<>
						<S.SideBarBorder/>
						<SideBarSubList
							sideBarSubListItem={item}
						/>
					</>
				))}
			</StyledFlexWrapper>


		</S.SideBar>
	);
};

export default SideBar;
