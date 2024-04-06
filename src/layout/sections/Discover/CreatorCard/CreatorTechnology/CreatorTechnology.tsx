import React from 'react';
import {S} from "./Styled_CreatorTechnology"
import {Icon} from "../../../../../components/icon/Icon";
import {Creator, Technology} from "../../../../../localMarkupDb/localMarkupDb";
import {StyledFlexWrapper} from "../../../../../components/flexWrapper";

interface CreatorTechnologyProps {
	technology: Technology
}

export const CreatorTechnology = ({technology}: CreatorTechnologyProps) => {
	return (
		<S.CreatorTechnology>
			<StyledFlexWrapper
				direction={"row"}
				justify={"left"}
				align={"center"}
				gap={"50px"}
			>
				<Icon
					width={"100px"}
					height={"100px"}
					viewBox={"0 0 130 130"}
					iconId={technology.iconId}
				/>
				{technology.naming}
			</StyledFlexWrapper>

		</S.CreatorTechnology>
	);
};

