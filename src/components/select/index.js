import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

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
					size={60}
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
					<option
						className={
							Object.values(states).find(item =>
								item.toUpperCase().includes(inputValueFilterState.toUpperCase())
							) === undefined
								? ''
								: 'hidden'
						}
						value="Unexisting State"
					>
						Unexisting State
					</option>
				</select>
			</form>
		);
	}
}

export default Select;

Select.defaultProps = {
	classNameSelect: PropTypes.string.isRequired,
	inputValueFilterState: PropTypes.string.isRequired,
	states: PropTypes.arrayOf(PropTypes.string).isRequired,
	handleSelectState: PropTypes.func.isRequired
};
