import React from 'react';
import {S} from "./Styled_HomePage"
import {TopList} from "../../../components/topListCarouselle/TopList";
import {StyledFlexWrapper} from "../../../components/flexWrapper/flexWrapper";
import {NewMoviesFilmsList, RecommendedFilmsList} from "../../../localMarkupDb/localMarkupDb";
import {MoviesList} from "../../../components/MoviesList/MoviesList";

export const HomePage = () => {
	return (
		<S.HomePage>
			<StyledFlexWrapper
				gap={"30px"}
				direction={"column"}
			>
				<TopList/>
				<MoviesList filmList={NewMoviesFilmsList} title={"new movies list"}/>
				<MoviesList filmList={RecommendedFilmsList} title={"recommended"}/>
			</StyledFlexWrapper>

		</S.HomePage>
	);
};

