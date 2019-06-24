import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ButtonWithText extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { text, handleButtonTextCLick, classNameButtonText } = this.props;
    return (
      <button
        className={classNameButtonText}
        onClick={handleButtonTextCLick}
        type="button"
      >
        {text}
      </button>
    );
  }
}

ButtonWithText.propTypes = {
  text: PropTypes.string.isRequired,
  classNameButtonText: PropTypes.string.isRequired,
  handleButtonTextCLick: PropTypes.func.isRequired,
};

export default ButtonWithText;
