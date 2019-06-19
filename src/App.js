import React from 'react';
import './App.css';
import fetchStatesData from './services/getStates';
import SelectStates from './components/selectStates.js/index';

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.getDataStates();
	}

	getDataStates = () => {
		fetchStatesData().then(states => console.log(states));
	};

	render() {
		return (
			<React.Fragment>
				<SelectStates />
			</React.Fragment>
		);
	}
}

export default App;
