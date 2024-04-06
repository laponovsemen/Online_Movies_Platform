import styled from "styled-components";
import {Theme} from "../../../styles/Theme";


const SearchInput = styled.input.attrs({placeholder: "⌕ Search ..."})`
  width: 252px;
  height: 55px;
  border-radius: 20px;
  color: rgba(255, 255, 255, 0.6);
  background: rgba(217, 217, 217, 0.15);
  border: none;
  backdrop-filter: blur(5px);
  font-family: Poppins,serif;
  font-size: 20px;
  font-weight: 300;
  line-height: 30px;
  letter-spacing: 0;
  text-align: left;
  
  &::placeholder{
    position: absolute;
    width: 96.75px;
    height: 30px;
    left: 66.38px;
    right: 88.88px;
    top: 15px;
    color: rgba(255, 255, 255, 0.6);
    font-family: Poppins,serif;
    font-size: 20px;
    font-weight: 300;
    line-height: 30px;
    letter-spacing: 0;
    text-align: left;
    
    &::before{
      content: "HUI";
      visibility: visible;
      display: inline;
    }
  }
`

export const S = {
	SearchInput
}
