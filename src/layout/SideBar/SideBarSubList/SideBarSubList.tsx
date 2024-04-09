import React from 'react';
import {SideBarMenuSubList} from "../../../localMarkupDb/localMarkupDb";
import {SideBarSubListItem} from "./SideBarSubListItem/SideBarSubListItem";
import {S} from "./Styled_SideBarSubList"
import {StyledFlexWrapper} from "../../../components/flexWrapper/flexWrapper";

interface SideBarSubListProps {
	sideBarSubListItem: SideBarMenuSubList
}

export const SideBarSubList = ({sideBarSubListItem}: SideBarSubListProps) => {
	return (
		<S.SideBarSubList>
			<StyledFlexWrapper
			direction={"column"}
			gap={"15px"}
			>
				{sideBarSubListItem.name}
				{sideBarSubListItem.items.map(item => (
					<SideBarSubListItem item={item}/>
				))}
			</StyledFlexWrapper>
		</S.SideBarSubList>
	);
};

