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
			states: {},
			isFetching: false
		};
	}
	componentDidMount() {
		this.getDataStates();
	}

	getDataStates = () => {
		fetchStatesData()
			.then(statesData =>
				this.setState({ states: statesData, isFetching: true })
			)
			.catch(error => console.log(error));
	};

	handleInputSearchState = event => {
		let { value } = event.target;
		this.setState(prevState => {
			return {
				input: {
					selectedStates: this.state.input.selectedStates
						.filter(item => item !== value)
						.concat(value)
				}
			};
		});
	};

	render() {
		return (
			<React.Fragment>
				<div className="page__wrapper">
					{this.state.isFetching ? (
						<SelectStates
							handleInputSearchState={this.handleInputSearchState}
							states={this.state.states}
							selectedStates={this.state.input.selectedStates}
						/>
					) : (
						<p>Loading data ...</p>
					)}
				</div>
			</React.Fragment>
		);
	}
}

export default App;
