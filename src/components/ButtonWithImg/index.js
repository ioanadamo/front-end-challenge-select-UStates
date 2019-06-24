import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ButtonWithImg extends PureComponent {
  render() {
    const { classButton, handleOnClick, classImg, srcImg, altImg } = this.props;
    return (
      <button type="button" className={classButton} onClick={handleOnClick}>
        <img className={classImg} src={srcImg} alt={altImg} />
      </button>
    );
  }
}
ButtonWithImg.propTypes = {
  classButton: PropTypes.string.isRequired,
  classImg: PropTypes.string.isRequired,
  srcImg: PropTypes.string.isRequired,
  altImg: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func.isRequired,
};

export default ButtonWithImg;
