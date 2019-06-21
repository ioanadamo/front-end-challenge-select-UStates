import React from 'react';
import './styles.scss';
import xImgage from '../../images/xImage.png';

class SelectStates extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputV: ''
		};
	}

	handleinp = e => {
		let { value } = e.currentTarget;

		this.setState({
			inputV: value
		});
	};

	render() {
		return (
			<React.Fragment>
				<main className="selectedStates--main__container">
					<div className="selectedStates--input__section">
						<ul className="selectedStates--list__states">
							{this.props.selectedStates.map((state, index) => (
								<li key={index} className="selectedStates--list__states-state">
									<p className="selectedStates--states-pgph-elem">{state}</p>
									<img
										className="selectedStates--eliminate-state-Img"
										src={xImgage}
										alt="eliminate state"
									/>
								</li>
							))}
						</ul>
						<input
							className="selectedStates--input__search-state"
							type="text"
							placeholder={this.props.selectedStates.length ? '' : 'State'}
							onChange={this.handleinp}
						/>
					</div>
					<select
						multiple
						onChange={this.props.handleInputSearchState}
						name=""
						id=""
					>
						{Object.values(this.props.states)
							.filter(item =>
								item.toUpperCase().includes(this.state.inputV.toUpperCase())
							)
							.map((state, ind) => (
								<option key={ind} value={state}>
									{state}
								</option>
							))}
					</select>
				</main>
			</React.Fragment>
		);
	}
}

export default SelectStates;
