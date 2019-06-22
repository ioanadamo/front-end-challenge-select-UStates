import React from 'react';
import './App.css';
import fetchStatesData from './services/getStates';
import SelectStates from './components/selectStates/index';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValueFilterState: '',
			classNameSelect: 'hidden',
			selectedStatesList: [],
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

	handleSelectState = event => {
		let { value } = event.target;
		this.setState(prevState => {
			return {
				selectedStatesList: prevState.selectedStatesList
					.filter(item => item !== value)
					.concat(value)
			};
		});
	};

	handleInputFilterState = e => {
		let { value } = e.currentTarget;

		this.setState({
			inputValueFilterState: value,
			classNameSelect: ''
		});
	};

	handleElimnateSelectedState = e => {
		return (e.currentTarget.parentElement.className += ' hidden');
	};

	handleOpenListStates = () => {
		this.setState(prevState => {
			return {
				classNameSelect: prevState.classNameSelect === 'hidden' ? '' : 'hidden'
			};
		});
	};

	render() {
		let {
			classNameSelect,
			inputValueFilterState,
			states,
			selectedStatesList
		} = this.state;
		let {
			handleSelectState,
			handleElimnateSelectedState,
			handleOpenListStates,
			handleInputFilterState
		} = this;
		return (
			<React.Fragment>
				<div className="page__wrapper">
					{this.state.isFetching ? (
						<SelectStates
							handleSelectState={handleSelectState}
							handleElimnateSelectedState={handleElimnateSelectedState}
							handleOpenListStates={handleOpenListStates}
							handleInputFilterState={handleInputFilterState}
							states={states}
							selectedStatesList={selectedStatesList}
							classNameSelect={classNameSelect}
							inputValueFilterState={inputValueFilterState}
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
