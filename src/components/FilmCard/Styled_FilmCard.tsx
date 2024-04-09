import styled from "styled-components";


const FilmCard = styled.div`
  position: relative;
  height: 262px;
  width: 186px;

  margin: 20px 20px 30px 20px;

`
const FilmCardName = styled.div`
  text-transform: capitalize;
  position: absolute;
  bottom: 0;
  transform: translateY(30px);
  text-align: center;
  margin: 0 auto;
`
const FilmCardWrapper = styled.div`
  /* box-sizing: border-box;*/
  transform: rotate(3.57deg);

  width: 100%;
  height: 262px;
  border-radius: 10px;
  position: absolute;

  /*background-origin: padding-box, border-box;*/

  border: 4px solid transparent;
  background-image: linear-gradient(rgb(195, 59, 59), rgba(195, 59, 59, 0.5));

  /*padding: 30px;*/
  /*background-clip: border-box;*/
  /*background: linear-gradient(rgb(195, 59, 59), rgba(195, 59, 59, 0.5));*/
`
const FilmCardImageContentItem = styled.div`
  color: transparent;
  pointer-events: none;
  text-align: center;
  transform: translateY(-70px);
  transition: 0.3s ease-in-out;

`
const MarkC = styled.div<{ mark: number }>`
  /*color: transparent;
  border: transparent;*/
  visibility: hidden;
  pointer-events: none;
  //visibility: visible;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  user-select: none;
  position: absolute;
  width: 25px;
  height: 25px;
  color: ${props => props.mark > 7 ? "green" : "yellow"};
  border: 1px solid ${props => props.mark > 7 ? "green" : "yellow"};
  border-radius: 50%;
  text-align: center;
  vertical-align: center;
  background: transparent;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
`
const FilmCardImageContent = styled.div`
  text-transform: capitalize;
  user-select: none;
  /*
  &:hover{
    visibility: visible;
  }*/


`
const addToWatchListBtn = styled.button`
  height: 19px;
  visibility: visible;
  opacity: 0;
  width: 24px;
  cursor: pointer;

  transition: 0.3s ease-in-out;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  border: none;
  top: 5px;
  left: 16px;

  border-radius: 15px;

  &:before {

    content: "+";
    color: rgb(255, 255, 255);
    font-family: Poppins, serif;
    font-size: 20px;
    font-weight: 300;
    /*transform: translateY(200px);*/
    line-height: 20px;
    letter-spacing: 0;
    text-align: center;
  }


`
const FilmCardImage = styled.img`
  position: relative;
  height: 262px;
  object-fit: cover;
  scale: 1;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  pointer-events: auto;

  &:hover {
    filter: blur(4px) grayscale(50%);
    scale: 1.1;
    background-color: black;

    ${addToWatchListBtn}:hover {

    }
  }

  &:hover + ${FilmCardImageContent} {
    visibility: visible;

    ${FilmCardImageContentItem} {
      color: inherit;
    }

    ${addToWatchListBtn} {
      opacity: 1;
      pointer-events: auto;
      &:hover{
        border: 1px solid white;
      }
    }

    ${MarkC} {
      visibility: visible;
      opacity: 1;

    }
  }

  &:hover ${MarkC} {
    visibility: visible;
    color: pink;
  }

  &:hover ${addToWatchListBtn} {
    opacity: 1;
  }




`


export const S = {
	FilmCard,
	FilmCardWrapper,
	FilmCardImage,
	FilmCardName,
	FilmCardImageContent,
	FilmCardImageContentItem,
	Mark: MarkC,
	addToWatchListBtn
}
