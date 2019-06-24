import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class PgphElem extends PureComponent {
  render() {
    const { textPgphELem } = this.props;
    return <p> {textPgphELem}</p>;
  }
}
PgphElem.propTypes = {
  textPgphELem: PropTypes.string.isRequired,
};

export default PgphElem;
