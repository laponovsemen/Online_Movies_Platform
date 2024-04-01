import React from 'react';
import SideBar from "../SideBar/SideBar";
import MainInfo from "./MainInfo";
import {StyledFlexWrapper} from "../../components/flexWrapper";



const Main = () => {
	return (
		<>
			<StyledFlexWrapper>
				<SideBar/>
				<MainInfo/>
			</StyledFlexWrapper>

		</>
	);
};


export default Main;
