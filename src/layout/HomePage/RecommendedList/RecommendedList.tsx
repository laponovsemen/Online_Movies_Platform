import React from 'react';
import {Film} from "../../../localMarkupDb/localMarkupDb";
import {S} from "./Styled_RecommendedList"
import FilmCard from "../../../components/FilmCard/FilmCard";
import {StyledFlexWrapper} from "../../../components/flexWrapper";


interface RecommendedListProps {
	filmList: Film[]
}
export const RecommendedList = ({filmList}: RecommendedListProps) => {
	return (
		<S.RecommendedList>
			<S.RecommendedListTitle>
				Recommended
			</S.RecommendedListTitle>
			<StyledFlexWrapper
				gap={"40px"}
			>
				{filmList.map(film => (
					<FilmCard film={film}/>
				))}
			</StyledFlexWrapper>
		</S.RecommendedList>
	);
};

