import React from 'react';
import {S} from "./Styled_MoviesList"
import {Film} from "../../localMarkupDb/localMarkupDb";
import {FilmCard} from "../FilmCard/FilmCard";
import {StyledFlexWrapper} from "../flexWrapper/flexWrapper";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css'
import './../../styles/alice-carousel-custom-styles.css'

interface NewMoviesListProps {
	filmList: Film[]
	title: string
}

export const MoviesList = ({filmList, title}: NewMoviesListProps) => {
	const responsive = {
		0: { items: 1 },
		568: { items: 2 },
		700:{items: 3},
		1024: { items: 4},
	};
	return (
		<S.MoviesList>

			<S.MoviesListTitle>
				{title}
			</S.MoviesListTitle>
			<StyledFlexWrapper
				gap={"40px"}
			>
				{<AliceCarousel

					mouseTracking
					infinite
					/*autoWidth*/
					animationDuration={300}
					animationEasingFunction={"ease"}
					responsive={responsive}
					items={filmList.map(film => (
						<FilmCard film={film}/>
					))}/>}
			</StyledFlexWrapper>

		</S.MoviesList>
	);
};

