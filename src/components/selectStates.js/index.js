import React from 'react';
import './styles.css';

class SelectStates extends React.Component {
	render() {
		return (
			<React.Fragment>
				<input type="text" placeholder="State" list="states" multiple />
				<datalist id="states" multiple>
					{Object.values(this.props.states).map((state, ind) => (
						<option key={ind} value={state}>
							{state}
						</option>
					))}
				</datalist>
			</React.Fragment>
		);
	}
}

export default SelectStates;
