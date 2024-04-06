import styled from "styled-components";
import {Theme} from "../../styles/Theme";

export interface StyledButtonProps {
	width?: string,
	height? : string,
	color? : string,
	backgroundColor?: string,
	colorOnHover? : string


}
const Button = styled.button<StyledButtonProps>`
  width: ${props => props.width ?? "100px"};
  height: ${props => props.height ?? "100px"};
  color: ${props => props.color ?? "inherit"};
  border: none;
  background: ${props => props.backgroundColor ?? Theme.colors.secondaryBackGround};

  &:hover {
    background: ${props => props.color ?? "red"};
    color: black;
  }
`

export const S = {
	Button
}
