import React from 'react';
import {S} from "./Styled_NewMoviesList"
import {Film} from "../../../localMarkupDb/localMarkupDb";
import FilmCard from "../../../components/FilmCard/FilmCard";
import {StyledFlexWrapper} from "../../../components/flexWrapper";

interface NewMoviesListProps {
	filmList: Film[]
}
export const NewMoviesList = ({filmList} : NewMoviesListProps) => {
	return (
		<S.NewMoviesList>

			<S.NewMoviesListTitle>
				New Movies
			</S.NewMoviesListTitle>
			<StyledFlexWrapper
				gap={"40px"}
			>
				{filmList.map(film => (
					<FilmCard film={film}/>
				))}
			</StyledFlexWrapper>

		</S.NewMoviesList>
	);
};

