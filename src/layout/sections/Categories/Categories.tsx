import React, {useEffect} from 'react';
import {S } from "./../../../styles/Styled_Section"
import {MoviesList} from "../../../components/MoviesList/MoviesList";
import {NewMoviesFilmsList} from "../../../localMarkupDb/localMarkupDb";
export const Categories = () => {

	//
	/*useEffect(

	)*/
	return (
		<S.Section>
			Here must be awards Categories
			{[1,2,3,4,5,6,7,8,9].map(item =>
				<MoviesList filmList={NewMoviesFilmsList} title={`category: ${item}`}/>

			)}
		</S.Section>
	);
};
