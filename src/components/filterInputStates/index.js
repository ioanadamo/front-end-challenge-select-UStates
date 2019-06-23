import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class InputFilterStates extends PureComponent {
  render() {
    const {
      inputValueFilterState,
      selectedStatesList,
      handleOpenListStates,
      handleInputFilterState,
    } = this.props;
    return (
      <form className="form_inputSearch" action="">
        <label htmlFor="FilterState">
          <input
            name="FilterState"
            className="input__search-state"
            type="text"
            placeholder={selectedStatesList.length ? '' : 'State'}
            onChange={handleInputFilterState}
            onClick={handleOpenListStates}
            value={inputValueFilterState}
          />
        </label>
      </form>
    );
  }
}
InputFilterStates.propTypes = {
  inputValueFilterState: PropTypes.string.isRequired,
  selectedStatesList: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleOpenListStates: PropTypes.func.isRequired,
  handleInputFilterState: PropTypes.func.isRequired,
};

export default InputFilterStates;
