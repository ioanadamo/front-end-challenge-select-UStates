/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { PureComponent } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

class Select extends PureComponent {
  render() {
    const {
      classNameSelect,
      inputValueFilterState,
      states,
      handleSelectState,
    } = this.props;

    return (
      <form className="from__select" action="">
        <label htmlFor="selectStates">
          <select
            className={`${classNameSelect} select__element`}
            multiple
            size={60}
            onChange={handleSelectState}
            name="selectStates"
            id="selectStates"
          >
            {Object.values(states)
              .filter(item =>
                item.name
                  .toUpperCase()
                  .includes(inputValueFilterState.toUpperCase()),
              )

              .map(state => (
                <option
                  className="select__option"
                  key={state.id}
                  value={state.name}
                >
                  {state.name}
                </option>
              ))}
            <option
              className={
                Object.values(states).find(item =>
                  item.name
                    .toUpperCase()
                    .includes(inputValueFilterState.toUpperCase()),
                ) === undefined
                  ? ''
                  : 'hidden'
              }
              value="Unexisting State"
            >
              Unexisting State
            </option>
          </select>
        </label>
      </form>
    );
  }
}
Select.propTypes = {
  classNameSelect: PropTypes.string.isRequired,
  inputValueFilterState: PropTypes.string.isRequired,
  states: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSelectState: PropTypes.func.isRequired,
};
export default Select;
