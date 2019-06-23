import React from 'react';
import './styles.scss';
import xImgage from '../../images/xImage.png';
import PropTypes from 'prop-types';
import Button from '../button/index';

class ListSelectedStates extends React.Component {
	render() {
		let { selectedStatesList, handleElimnateSelectedState } = this.props;
		return (
			<ul className="listSelectedStates--list__states">
				{selectedStatesList.map((state, index) => (
					<li key={index} className={'listSelectedStates--list__states-state'}>
						<p className="listSelectedStates--states-pgph-elem">{state}</p>
						<Button
							classButton="listSelectedStates--button__eliminateState"
							classImg="listSelectedStates--eliminate-state-Img"
							srcImg={xImgage}
							altImg="eliminate state"
							handleOnClick={handleElimnateSelectedState}
						/>
					</li>
				))}
			</ul>
		);
	}
}

export default ListSelectedStates;

ListSelectedStates.defaultProps = {
	selectedStatesList: PropTypes.arrayOf(PropTypes.string).isRequired,
	handleElimnateSelectedState: PropTypes.func.isRequired
};
