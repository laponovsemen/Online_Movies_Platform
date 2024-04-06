import styled from "styled-components";
import {Theme} from "../../../../../styles/Theme";


const CloseButton = styled.button`
	top: 25px;
  right: 30px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  position: absolute;
  background: inherit;
  z-index: 0;
  border: none;
`
const CloseButtonCross = styled.span`
	background: ${Theme.colors.textColor};
  position: absolute;
  /*top: 15px;
  right: 15px;*/
  color:white;
  z-index: 9999;
  transform: rotate(0deg);
  &::before{
    content: "";
    position: absolute;
    color: white;
    background-color: #fff;
    display: block;
    height: 2px;
    transform: rotate(45deg);
    width: 20px;
    
  }
  &::after{
    content: "";
    position: absolute;
    background-color: #fff;
    transform: rotate(-45deg);
    display:block;
    height: 2px;
    width: 20px;

  }
`
export const S = {
	CloseButton,
	CloseButtonCross
}
