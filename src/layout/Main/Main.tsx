import React from 'react';
import SideBar from "../SideBar/SideBar";
import MainInfo from "./MainInfo/MainInfo";
import {StyledFlexWrapper} from "../../components/flexWrapper/flexWrapper";
import {S} from "./Styled_Main"
import {sideBarMenuList} from "../../localMarkupDb/localMarkupDb";
import {Route, Routes} from "react-router-dom";
import {Discover} from "../sections/Discover/Discover";
import {Settings} from "../sections/Settings/Settings";
import {Container} from "../../components/Container/Container";
import {Account} from "../sections/Account/Account";
import {Categories} from "../sections/Categories/Categories";
import {Awards} from "../sections/Awards/Awards";
import {Logout} from "../sections/Logout/Logout";
import {WatchList} from "../sections/WatchList/WatchList";
import {Login} from "../sections/Login/Login";


const Main = () => {
	return (

		<S.Main>
			<StyledFlexWrapper>
				<SideBar
					sideBarMenuList={sideBarMenuList}
				/>
				<Container maxWidth={"1021px"}>
					<Routes>
						<Route path={"/"} element={<MainInfo/>}/>
						<Route path={"/categories"} element={<Categories/>}/>
						<Route path={"/awards"} element={<Awards/>}/>
						<Route path={"/discover"} element={<Discover/>}/>

						<Route path={"/account"} element={<Account/>}/>
						<Route path={"/watch-list"} element={<WatchList/>}/>
						<Route path={"/settings"} element={<Settings/>}/>
						<Route path={"/logout"} element={<Logout/>}/>
						<Route path={"/login"} element={<Login/>}/>
						<Route path={"/registration"} element={<Logout/>}/>
					</Routes>
				</Container>

			</StyledFlexWrapper>

		</S.Main>

	);
};


export default Main;
