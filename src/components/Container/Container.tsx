import styled from "styled-components";

interface ContainerProps {
	maxWidth? : string
}
export const Container = styled.div<ContainerProps>`
	max-width: ${props => props.maxWidth ?? "1197px"};
  width:100%;
  /*overflow: hidden;*/
  min-height:100%;
  height: 100%;
  padding: 0 15px;
  margin: 0 auto;
  border: 0px solid red;
`

