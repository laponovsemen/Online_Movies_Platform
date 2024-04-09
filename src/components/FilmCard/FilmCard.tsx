import React from 'react';
import {S} from "./Styled_FilmCard"
import {Film} from "../../localMarkupDb/localMarkupDb";
import {StyledFlexWrapper} from "../flexWrapper/flexWrapper";
import {useNavigate} from "react-router-dom";

interface FilmCardProps {
	film: Film
}

export const FilmCard = ({film}: FilmCardProps) => {
	const navigate = useNavigate()
	return (
		<S.FilmCard onClick={() => navigate(`/watch/${film.name}`)}>
			<S.FilmCardWrapper>

			</S.FilmCardWrapper>
			<S.FilmCardImage src={film.image}/>
			<S.FilmCardImageContent>
				<S.FilmCardImageContentItem>

				</S.FilmCardImageContentItem>
				<StyledFlexWrapper
					align={"stretch"}
					justify={"Space-evenly"}
				>
					<S.FilmCardImageContentItem>
						{film.duration}
					</S.FilmCardImageContentItem>
					<S.FilmCardImageContentItem>
						{film.genre}
					</S.FilmCardImageContentItem>
				</StyledFlexWrapper>

				<S.Mark mark={film.mark}>
					{film.mark}
				</S.Mark>
				<S.addToWatchListBtn/>
			</S.FilmCardImageContent>
			<S.FilmCardName>
				{film.name}
			</S.FilmCardName>



		</S.FilmCard>
	);
};


