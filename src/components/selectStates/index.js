import React from 'react';
import './styles.scss';
import dropDownImg from '../../images/triangle-down-512.png';
import InputFilterStates from '../filterInputStates/index';
import ListSelectedStates from '../listSelectedStates/index';
import Select from '../select/index';
import PropTypes from 'prop-types';
import Button from '../button/index';

class SelectStates extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		let {
			classNameSelect,
			inputValueFilterState,
			states,
			selectedStatesList,
			handleSelectState,
			handleElimnateSelectedState,
			handleOpenListStates,
			handleInputFilterState
		} = this.props;

		return (
			<React.Fragment>
				<main className="selectedStates--main__container">
					<div className="selectedStates--input__section">
						<ListSelectedStates
							handleElimnateSelectedState={handleElimnateSelectedState}
							selectedStatesList={selectedStatesList}
						/>
						<InputFilterStates
							handleOpenListStates={handleOpenListStates}
							handleInputFilterState={handleInputFilterState}
							selectedStatesList={selectedStatesList}
							inputValueFilterState={inputValueFilterState}
						/>
						<Button
							classButton="button__dropDownStates"
							classImg="slectedStates--dropDown-arrowImg"
							srcImg={dropDownImg}
							altImg="drop down traingle"
							handleOnClick={handleOpenListStates}
						/>
					</div>
					<Select
						handleSelectState={handleSelectState}
						states={states}
						classNameSelect={classNameSelect}
						inputValueFilterState={inputValueFilterState}
					/>
				</main>
			</React.Fragment>
		);
	}
}

export default SelectStates;

InputFilterStates.defaultProps = {
	inputValueFilterState: PropTypes.string.isRequired,
	selectedStatesList: PropTypes.arrayOf(PropTypes.string).isRequired,
	handleOpenListStates: PropTypes.func.isRequired,
	handleInputFilterState: PropTypes.func.isRequired,
	handleElimnateSelectedState: PropTypes.func.isRequired,
	classNameSelect: PropTypes.string.isRequired,
	states: PropTypes.arrayOf(PropTypes.string).isRequired,
	handleSelectState: PropTypes.func.isRequired
};
