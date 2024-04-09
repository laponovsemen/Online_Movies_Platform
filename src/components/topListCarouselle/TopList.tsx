import React from 'react';
import {S} from "./Styled_TopList"
import Gachi from "../../assets/images/Gachi.jpeg"
export const TopList = () => {
	return (
		<S.TopList>
			Тут должен быть или Alice Carousele или кастомный скролл для фильмов так шо пока сосать
			<img src={Gachi} width={"100%"} height={"100%"}/>
		</S.TopList>
	);
};

