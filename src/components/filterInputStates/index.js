import React from 'react';
import './styles.scss';

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
