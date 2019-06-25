import React, { PureComponent, Fragment } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import dropDownImg from '../../images/triangle-down-512.png';
import InputFilterStates from '../FilterInputStates/index';
import ListSelectedStates from '../ListSelectedStates/index';
import Select from '../Select/index';
import ButtonWithImg from '../ButtonWithImg/index';
import ButtonWithText from '../ButtonWithText';

class SelectStates extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      selectIsOpen,
      inputValueFilterState,
      states,
      selectedStatesList,
      handleSelectState,
      handleElimnateSelectedState,
      handleOpenListStates,
      handleInputFilterState,
      handleBtnELiminateAllSelectedStates,
    } = this.props;

    return (
      <Fragment>
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
            <ButtonWithImg
              classButton="button__dropDownStates"
              classImg="slectedStates--dropDown-arrowImg"
              srcImg={dropDownImg}
              altImg="drop down traingle"
              handleOnClick={handleOpenListStates}
            />
          </div>
          {selectedStatesList.length ? (
            <ButtonWithText
              handleButtonTextCLick={handleBtnELiminateAllSelectedStates}
              text="Deselect all the states"
            />
          ) : null}

          {selectIsOpen === true ||
          inputValueFilterState ||
          selectedStatesList.length ? (
            <Select
              handleSelectState={handleSelectState}
              states={states}
              selectIsOpen={selectIsOpen}
              inputValueFilterState={inputValueFilterState}
            />
          ) : null}
        </main>
      </Fragment>
    );
  }
}
SelectStates.propTypes = {
  inputValueFilterState: PropTypes.string.isRequired,
  selectedStatesList: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleOpenListStates: PropTypes.func.isRequired,
  handleInputFilterState: PropTypes.func.isRequired,
  handleElimnateSelectedState: PropTypes.func.isRequired,
  selectIsOpen: PropTypes.bool.isRequired,
  states: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSelectState: PropTypes.func.isRequired,
  handleBtnELiminateAllSelectedStates: PropTypes.func.isRequired,
};

export default SelectStates;
