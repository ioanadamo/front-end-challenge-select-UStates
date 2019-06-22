import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

class InputFilterStates extends React.Component {
	render() {
		let {
			inputValueFilterState,
			selectedStatesList,
			handleOpenListStates,
			handleInputFilterState
		} = this.props;
		return (
			<form className="form_inputSearch" action="">
				<label htmlFor="FilterState" />
				<input
					name="FilterState"
					className="input__search-state"
					type="text"
					placeholder={selectedStatesList.length ? '' : 'State'}
					onChange={handleInputFilterState}
					onClick={handleOpenListStates}
					value={inputValueFilterState}
				/>
			</form>
		);
	}
}

export default InputFilterStates;

InputFilterStates.defaultProps = {
	inputValueFilterState: PropTypes.string.isRequired,
	selectedStatesList: PropTypes.arrayOf(PropTypes.string).isRequired,
	handleOpenListStates: PropTypes.func.isRequired,
	handleInputFilterState: PropTypes.func.isRequired
};
