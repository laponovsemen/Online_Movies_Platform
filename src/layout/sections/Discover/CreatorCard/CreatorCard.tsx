import React from 'react';
import {Creator} from "../../../../localMarkupDb/localMarkupDb";
import {CreatorCardAvatar} from "./CreatorAvatar/CreatorCardAvatar";
import {S} from "./Styled_CreatorCard"
import {StyledFlexWrapper} from "../../../../components/flexWrapper";
import {CreatorTechnology} from "./CreatorTechnology/CreatorTechnology";

interface CreatorCardProps {
	creator: Creator
}

export const CreatorCard = ({creator}: CreatorCardProps) => {
	return (
		<S.CreatorCard>
			<StyledFlexWrapper
				direction={"column"}
			>
				<CreatorCardAvatar src={creator.avatar}/>
				<S.CreatorCardText>
					name: {creator.firstName}
				</S.CreatorCardText>
				<S.CreatorCardText>
					surname: {creator.familyName}
				</S.CreatorCardText>
				<S.CreatorCardText>
					description: {creator.description}
				</S.CreatorCardText>
				<S.CreatorCardText>
					technologies:
				</S.CreatorCardText>

				<StyledFlexWrapper
					direction={"column"}

				>
					{creator.listOfTechnologies.map(item => (
						<CreatorTechnology technology={item}/>
					))}
				</StyledFlexWrapper>
			</StyledFlexWrapper>
		</S.CreatorCard>
	);
};

