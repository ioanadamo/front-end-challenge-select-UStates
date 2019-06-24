import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import xImgage from '../../images/xImage.png';
import ButtonWithImg from '../ButtonWithImg/index';
import './styles.scss';

class ListSelectedStates extends PureComponent {
  render() {
    const { selectedStatesList, handleElimnateSelectedState } = this.props;
    return (
      <ul className="listSelectedStates--list__states">
        {selectedStatesList.map(state => (
          <li key={state.id} className="listSelectedStates--list__states-state">
            <p className="listSelectedStates--states-pgph-elem">{state.name}</p>
            <ButtonWithImg
              classButton="listSelectedStates--button__eliminateState"
              classImg="listSelectedStates--eliminate-state-Img"
              srcImg={xImgage}
              altImg="eliminate state"
              handleOnClick={() => handleElimnateSelectedState(state.id)}
            />
          </li>
        ))}
      </ul>
    );
  }
}
ListSelectedStates.propTypes = {
  selectedStatesList: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleElimnateSelectedState: PropTypes.func.isRequired,
};

export default ListSelectedStates;
