import styled from "styled-components";

const SideBarSubListItem = styled.div`
  text-transform: capitalize;
  height: 30px;

`
const navLinkStyle = ({isActive}: {
	isActive: boolean;
	isPending: boolean;
	isTransitioning: boolean;
}) => {
	return {
		display: "block",
		textDecoration: "none",
		height: "100%",
		borderRadius: "3px",
		color: isActive ? "black" : "inherit",
		backgroundColor: isActive ? "red" : "inherit"
	}

}
export const S = {SideBarSubListItem, navLinkStyle}
