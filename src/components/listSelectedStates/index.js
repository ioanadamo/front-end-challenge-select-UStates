import React from 'react';
import './styles.scss';
import xImgage from '../../images/xImage.png';

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
