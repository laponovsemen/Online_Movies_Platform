import React from 'react';
import styled from "styled-components";

type  FlexWrapperPropsType = {
	direction?: string
	justify?: string
	align?: string
	wrap? : string
	gap? : string


}
export const StyledFlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  
  max-height: 100%;
  max-width: 100%;
  gap: ${props => props.gap || "initial"};
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "flex-start"};
  align-items: ${props => props.align || "stretch"};
  flex-wrap : ${props => props.wrap || "no-wrap"};
`
