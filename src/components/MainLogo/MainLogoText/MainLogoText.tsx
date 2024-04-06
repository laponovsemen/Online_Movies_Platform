import React from 'react';
import styled from "styled-components";
interface MainLogoTextProps {
	text: string
}
const StyledMainLogoText = styled.span`
  top: 50%;
  text-transform: uppercase;
  font-family: Play, sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0;
  text-align: center;
  margin-right: 21px;
`
export const MainLogoText = ({text} : MainLogoTextProps) => {
	return (
		<StyledMainLogoText>
			{text}
		</StyledMainLogoText>
	);
};

