import React from 'react';
import {S} from "./Styled_FilmCard"
import {Film} from "../../localMarkupDb/localMarkupDb";

interface FilmCardProps{
	film : Film
}
const FilmCard = ({film} : FilmCardProps) => {
	return (
		<S.FilmCard>
			<S.FilmCardWrapper>

			</S.FilmCardWrapper>
			<S.FilmCardImageWrapper src={film.image}/>
		</S.FilmCard>
	);
};

export default FilmCard;
