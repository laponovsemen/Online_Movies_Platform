import React from 'react';
import {Header} from "./layout/Header/Header";
import {GlobalStyle} from "./styles/globalStyles";
import {Container} from "./components/Container";
import SideBar from "./layout/SideBar/SideBar";
import Main from "./layout/Main/Main";
import {BrowserRouter} from "react-router-dom";

function App() {
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
