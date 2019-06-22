import React from 'react';
import './styles.scss';
import { format } from 'util';

class Select extends React.Component {
	render() {
		let {
			classNameSelect,
			inputValueFilterState,
			states,
			handleSelectState
		} = this.props;

		return (
			<form className="from__select" action="">
				<label htmlFor="selectStates" />
				<select
					className={classNameSelect + ' select__element'}
					multiple
					onChange={handleSelectState}
					name="selectStates"
				>
					{Object.values(states)
						.filter(item =>
							item.toUpperCase().includes(inputValueFilterState.toUpperCase())
						)
						.map((state, ind) => (
							<option className="select__option" key={ind} value={state}>
								{state}
							</option>
						))}
				</select>
			</form>
		);
	}
}

export default Select;
