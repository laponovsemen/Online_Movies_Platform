import styled from "styled-components";

const FilmCategories = styled.ul`
	list-style: none;
  	display: inline;
  
  
`
const FilmCategory = styled.li`
  display: inline;
  text-transform: capitalize;

  & + & {
    margin-left: 54px;

  }
`
const FilmCategoryItem = styled.span`
  text-transform: capitalize;
`

export const S = {
	FilmCategories,
	FilmCategory,
	FilmCategoryItem
}
