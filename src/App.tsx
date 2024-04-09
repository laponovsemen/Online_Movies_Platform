import React, {useEffect} from 'react';
import {Header} from "./layout/Header/Header";
import {GlobalStyle} from "./styles/globalStyles";
import {Container} from "./components/Container/Container";
import SideBar from "./layout/SideBar/SideBar";
import Main from "./layout/Main/Main";
import {BrowserRouter} from "react-router-dom";
import {store} from "./store/store";
import {Provider, useDispatch} from "react-redux";
import {checkAuthThunk} from "./store/account/accountSlice";

function App() {
	const dispatch = useDispatch()
	useEffect(() => {
		if(localStorage.getItem('accessToken')){
			dispatch(checkAuthThunk())
		}

	}, [])
	return (<>

			<BrowserRouter basename={""}>
				<GlobalStyle/>
				<Container>
					<Header/>
					<Main/>
				</Container>
			</BrowserRouter>

	</>);
}

export default App;
