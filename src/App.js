import React, { Component } from 'react';
import './styles/App.css';
import './styles/Style.css';
import Navigation from './components/Navigation'

class App extends Component {


	render() {
		return(
			<React.Fragment>
				<Navigation />
			</React.Fragment>
		)

	}
}

export default App;
