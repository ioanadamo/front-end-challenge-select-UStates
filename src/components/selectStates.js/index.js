import React from 'react';

class SelectStates extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<form action="">
				<label htmlFor="selectState" />
				<select
					name="selectState"
					onClick={this.props.handleSelectState}
					id="selectState"
				>
					{Object.values(this.props.states).map((state, ind) => (
						<option key={ind} value={state}>
							{state}
						</option>
					))}
				</select>
			</form>
		);
	}
}

export default SelectStates;
