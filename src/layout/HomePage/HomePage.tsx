import React from 'react';
import {S} from "./Styled_HomePage"
import {NewMoviesList} from "./NewMoviesList/NewMoviesList";
import {TopList} from "./TopList/TopList";
import {RecommendedList} from "./RecommendedList/RecommendedList";
import {StyledFlexWrapper} from "../../components/flexWrapper";
import {NewMoviesFilmsList, RecommendedFilmsList} from "../../localMarkupDb/localMarkupDb";

export const HomePage = () => {
	return (
		<S.HomePage>
			<StyledFlexWrapper
				gap={"30px"}
				direction={"column"}
			>
				<TopList/>
				<NewMoviesList filmList={NewMoviesFilmsList}/>
				<RecommendedList filmList={RecommendedFilmsList}/>
			</StyledFlexWrapper>

		</S.HomePage>
	);
};

