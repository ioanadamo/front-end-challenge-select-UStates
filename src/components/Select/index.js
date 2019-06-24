/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { PureComponent, Fragment } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

class Select extends PureComponent {
  render() {
    const { inputValueFilterState, states, handleSelectState } = this.props;
    return (
      <Fragment>
        {inputValueFilterState.length &&
        states.find(item =>
          item.name.toUpperCase().includes(inputValueFilterState.toUpperCase()),
        ) === undefined ? (
          <p>Unexisting State, please introduce a valid state name</p>
        ) : (
          <form className="from__select" action="">
            <label htmlFor="selectStates">
              <select
                className="select__element"
                multiple
                size={60}
                onChange={handleSelectState}
                name="selectStates"
                id="selectStates"
              >
                {states
                  .filter(item =>
                    item.name
                      .toUpperCase()
                      .includes(inputValueFilterState.toUpperCase()),
                  )

                  .map(state => (
                    <option
                      className="select__option"
                      key={state.id}
                      id={state.id}
                      value={state.name}
                    >
                      {state.name}
                    </option>
                  ))}
              </select>
            </label>
          </form>
        )}
      </Fragment>
    );
  }
}
Select.propTypes = {
  inputValueFilterState: PropTypes.string.isRequired,
  states: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSelectState: PropTypes.func.isRequired,
};
export default Select;
