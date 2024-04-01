import React from 'react';
import {Header} from "./layout/Header/Header";
import {GlobalStyle} from "./styles/globalStyles";
import {Container} from "./components/Container";
import SideBar from "./layout/SideBar/SideBar";
import Main from "./layout/Main/Main";

function App() {
	return (<>
		<GlobalStyle/>
		<Container>
			<Header/>
			<Main/>
		</Container>
	</>);
}

export default App;
