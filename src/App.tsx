import React from 'react';
import {Header} from "./layout/Header/Header";
import {GlobalStyle} from "./styles/globalStyles";
import {Container} from "./components/Container/Container";
import SideBar from "./layout/SideBar/SideBar";
import Main from "./layout/Main/Main";
import {BrowserRouter} from "react-router-dom";
import {store} from "./store/store";
import {Provider} from "react-redux";

function App() {

	return (<>
		<Provider store={store}>
			<BrowserRouter basename={""}>
				<GlobalStyle/>
				<Container>
					<Header/>
					<Main/>
				</Container>
			</BrowserRouter>
		</Provider>
	</>);
}

export default App;
