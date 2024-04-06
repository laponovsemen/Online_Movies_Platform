import styled from "styled-components";

const SideBar = styled.div`
	position : absolute;
  width: 176px;
  
`
const SideBarBorder = styled.span`
	&::before{
	  position: absolute;
	  content: "";
	  display: block;
	  background: linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
	  height: 1px;
	  width: 100%;
	}
`
const SideBarList = styled.div`

`
const SideBarSublist = styled.div`

`
export const S = {
	SideBar,
	SideBarList,
	SideBarBorder
}
