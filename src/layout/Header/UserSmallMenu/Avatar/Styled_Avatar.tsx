import styled from "styled-components";

interface Styled_AvatarProps {
	width? : string
	height? : string
}

const Styled_Avatar = styled.img<Styled_AvatarProps>`
  width: ${props => props.width || "72px"};
  height: ${props => props.height || "72px"};
  border-radius: 50%;
  position: static;
  
  object-fit: cover;
  /* Inside Auto Layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 7px;
  box-shadow: 3px 4px 4px 0px rgba(255, 255, 255, 0.25),-3px -5px 4px 0px rgb(1, 1, 1),-2px 6px 4px 3px rgba(176, 173, 173, 0.05),-8px 4px 23px 0px rgba(208, 208, 208, 0.25);
  
  
`

export const S = {
	Avatar : Styled_Avatar
}
