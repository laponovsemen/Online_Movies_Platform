import React from 'react';
import {SideBarMenuSubListsItem} from "../../../../localMarkupDb/localMarkupDb";
import {Icon} from "../../../../components/icon/Icon";
import {S} from "./Styled_SideBarSubListItem"
import {StyledFlexWrapper} from "../../../../components/flexWrapper";
import {NavLink} from "react-router-dom";

interface SideBarSubListItemProps {
	item: SideBarMenuSubListsItem
}

export const SideBarSubListItem = ({item}: SideBarSubListItemProps) => {
	return (
		<S.SideBarSubListItem>
			<NavLink
				to={item.navigationId}
				style={S.navLinkStyle}
			>
				<StyledFlexWrapper
					align={"center"}
					gap={" 30px"}
				>
					<Icon
						iconId={item.iconId}
						width={"30px"}
						height={"30px"}
						viewBox={"0 0 30 30"}
					/>
					{item.title}
				</StyledFlexWrapper>
			</NavLink>
		</S.SideBarSubListItem>
	);
};

