import React from 'react';
import {S} from "../../../styles/Styled_Section"
import {StyledFlexWrapper} from "../../../components/flexWrapper";
import {creators} from "../../../localMarkupDb/localMarkupDb";
import {CreatorCard} from "./CreatorCard/CreatorCard";
export const Discover = () => {
	return (
		<S.Section>
			<StyledFlexWrapper
				direction={"row"}
				gap={"100px"}
			>
				{creators.map(item =>
					<CreatorCard creator={item}/>)}
			</StyledFlexWrapper>

		</S.Section>
	);
};

