import React from 'react';
import './App.css';
import fetchStatesData from './services/getStates';
import SelectStates from './components/selectStates.js/index';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filters: {
				selectedStates: []
			},
			states: {}
		};
	}
	componentDidMount() {
		this.getDataStates();
	}

	getDataStates = () => {
		fetchStatesData().then(statesData => this.setState({ states: statesData }));
	};

	handleSelectState = event => {
		let { value } = event.target;
		this.setState(prevState => {
			return {
				filters: {
					selectedStates: prevState.filters.selectedStates
						.filter(item => item !== value)
						.concat(value)
				}
			};
		});
	};

	render() {
		return (
			<React.Fragment>
				<SelectStates
					handleSelectState={this.handleSelectState}
					states={this.state.states}
				/>
			</React.Fragment>
		);
	}
}

export default App;
