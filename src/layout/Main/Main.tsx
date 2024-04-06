import React from 'react';
import SideBar from "../SideBar/SideBar";
import MainInfo from "./MainInfo/MainInfo";
import {StyledFlexWrapper} from "../../components/flexWrapper";
import {S} from "./Styled_Main"
import {sideBarMenuList} from "../../localMarkupDb/localMarkupDb";
import {Route, Routes} from "react-router-dom";
import {Discover} from "../sections/Discover/Discover";
import {Settings} from "../sections/Settings/Settings";
import {Container} from "../../components/Container";
import {Account} from "../sections/Account/Account";


const Main = () => {
	return (

		<S.Main>
			<StyledFlexWrapper>
				<SideBar
					sideBarMenuList={sideBarMenuList}
				/>
				<Container maxWidth={"2021px"}>
					<Routes>
						<Route path={"/"} element={<MainInfo/>}/>
						<Route path={"/discover"} element={<Discover/>}/>
						<Route path={"/settings"} element={<Settings/>}/>
						<Route path={"/account"} element={<Account/>}/>
					</Routes>
				</Container>

			</StyledFlexWrapper>

		</S.Main>

	);
};


export default Main;
