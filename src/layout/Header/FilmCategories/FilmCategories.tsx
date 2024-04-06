import React from 'react';
import {headerCategories} from "../../../localMarkupDb/localMarkupDb";
import { S } from "./Styled_FilmCategories"

const FilmCategories = () => {

	//todo не происходит capitalize айтемов списка как ожидается, происходит капиталайз только первого элемента
	return (
		<S.FilmCategories>
			{headerCategories.map(item => (<S.FilmCategory>
				<S.FilmCategoryItem>
					{item}
				</S.FilmCategoryItem>

			</S.FilmCategory>))}
		</S.FilmCategories>
	);
};

export default FilmCategories;
