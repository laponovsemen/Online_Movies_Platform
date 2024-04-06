import styled from "styled-components";


const FilmCard = styled.div`
	position : relative;
  height: 262px;
`
const FilmCardWrapper = styled.div`
 /* box-sizing: border-box;*/
  transform: rotate(3.57deg);
  
  width:100%;
  height: 262px;
  border-radius: 10px;
  position: absolute;
  
  /*background-origin: padding-box, border-box;*/
  
  border: 4px solid transparent;
  background-image:  linear-gradient(rgb(195, 59, 59), rgba(195, 59, 59, 0.5));
  
  /*padding: 30px;*/
  /*background-clip: border-box;*/
  /*background: linear-gradient(rgb(195, 59, 59), rgba(195, 59, 59, 0.5));*/
`
const FilmCardImageWrapper = styled.img`
	position : relative;
  height: 262px;
  	object-fit: cover;
`
export const S = {
	FilmCard,
	FilmCardWrapper,
	FilmCardImageWrapper
}
