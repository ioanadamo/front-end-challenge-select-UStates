import React from 'react';
import './App.css';
import fetchStatesData from './services/getStates';
import SelectStates from './components/selectStates.js/index';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: {
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

	handleInputSearchState = event => {
		let { value } = event.currentTarget;

		console.log(value);
		this.setState(prevState => {
			return {
				input: {
					selectedStates: prevState.input.selectedStates
						.filter(item => item !== value)
						.concat(value)
				}
			};
		});
	};

	/* handleSelectState = event => {
		let { value } = event.currentTarget;
		console.log(value);
		this.setState(prevState => {
			return {
				filters: {
					selectedStates: prevState.filters.selectedStates
						.filter(item => item !== value)
						.concat(value)
				}
			};
		});
	}; */

	render() {
		return (
			<React.Fragment>
				<SelectStates
					handleInputSearchState={this.handleInputSearchState}
					states={this.state.states}
					selectedStates={this.state.input.selectedStates}
				/>
			</React.Fragment>
		);
	}
}

export default App;
