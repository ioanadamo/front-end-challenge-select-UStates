import React from 'react';
import './styles.scss';
import xImgage from '../../images/xImage.png';
import PropTypes from 'prop-types';

class ListSelectedStates extends React.Component {
	render() {
		let { selectedStatesList, handleElimnateSelectedState } = this.props;
		return (
			<ul className="listSelectedStates--list__states">
				{selectedStatesList.map((state, index) => (
					<li key={index} className={'listSelectedStates--list__states-state'}>
						<p className="listSelectedStates--states-pgph-elem">{state}</p>
						<img
							className={'listSelectedStates--eliminate-state-Img'}
							src={xImgage}
							alt="eliminate state"
							onClick={handleElimnateSelectedState}
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
